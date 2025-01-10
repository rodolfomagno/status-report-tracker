import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Plus, ChevronDown, ChevronUp, Calendar } from 'lucide-react';

const StatusTracker = () => {
  const [reports, setReports] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [expandedReport, setExpandedReport] = useState(null);
  
  const [formData, setFormData] = useState({
    date: '',
    location: '',
    department: '',
    status: '',
    nextSteps: '',
    issues: '',
    feedback: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReport = {
      id: Date.now(),
      ...formData,
      timestamp: new Date().toISOString()
    };
    setReports([newReport, ...reports]);
    setFormData({
      date: '',
      location: '',
      department: '',
      status: '',
      nextSteps: '',
      issues: '',
      feedback: ''
    });
    setShowForm(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Acompanhamento de Relatórios de Status</span>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
            >
              <Plus size={16} />
              Novo Relatório
            </button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {showForm && (
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Data</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Localização</label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="">Selecione a Localização</option>
                    <option value="São Paulo">São Paulo</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Departamento</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Atualização de Status</label>
                <textarea
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full p-2 border rounded h-24"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Próximos Passos</label>
                <textarea
                  name="nextSteps"
                  value={formData.nextSteps}
                  onChange={handleChange}
                  className="w-full p-2 border rounded h-20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Problemas/Bloqueios</label>
                <textarea
                  name="issues"
                  value={formData.issues}
                  onChange={handleChange}
                  className="w-full p-2 border rounded h-20"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Salvar Relatório
                </button>
              </div>
            </form>
          )}

          <div className="space-y-4">
            {reports.map((report) => (
              <Card key={report.id} className="border rounded-lg">
                <div
                  className="p-4 cursor-pointer"
                  onClick={() => setExpandedReport(expandedReport === report.id ? null : report.id)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="font-medium">{report.date}</span>
                      <span className="text-gray-500">|</span>
                      <span className="font-medium">{report.location}</span>
                      <span className="text-gray-500">|</span>
                      <span>{report.department}</span>
                    </div>
                    {expandedReport === report.id ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </div>
                </div>
                {expandedReport === report.id && (
                  <div className="px-4 pb-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">Atualização de Status</h4>
                        <p className="text-gray-600 whitespace-pre-line">{report.status}</p>
                      </div>
                      {report.nextSteps && (
                        <div>
                          <h4 className="font-medium">Próximos Passos</h4>
                          <p className="text-gray-600 whitespace-pre-line">{report.nextSteps}</p>
                        </div>
                      )}
                      {report.issues && (
                        <div>
                          <h4 className="font-medium">Problemas/Bloqueios</h4>
                          <p className="text-gray-600 whitespace-pre-line">{report.issues}</p>
                        </div>
                      )}
                      <div className="mt-4 border-t pt-4">
                        <h4 className="font-medium">Feedback da Gestão</h4>
                        {report.feedback ? (
                          <div className="bg-gray-50 p-3 rounded-md mt-2">
                            <p className="text-gray-600 whitespace-pre-line">{report.feedback}</p>
                          </div>
                        ) : (
                          <form onSubmit={(e) => {
                            e.preventDefault();
                            const feedbackText = e.target.feedback.value;
                            if (feedbackText.trim()) {
                              const updatedReports = reports.map(r => 
                                r.id === report.id 
                                  ? { ...r, feedback: feedbackText }
                                  : r
                              );
                              setReports(updatedReports);
                              e.target.reset();
                            }
                          }} className="mt-2">
                            <textarea
                              name="feedback"
                              placeholder="Adicione seu feedback aqui..."
                              className="w-full p-2 border rounded h-20"
                            />
                            <button
                              type="submit"
                              className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
                            >
                              Adicionar Feedback
                            </button>
                          </form>
                        )}
                      </div>
                      <div className="text-xs text-gray-400 mt-4">
                        Última atualização: {new Date(report.timestamp).toLocaleString('pt-BR')}
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatusTracker;