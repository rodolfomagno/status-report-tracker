# Sistema de Acompanhamento de Relatórios de Status

Este é um componente React para gerenciamento e acompanhamento de relatórios de status, desenvolvido especialmente para ambientes corporativos. O sistema permite o registro, visualização e feedback de relatórios de status de diferentes localizações e departamentos.

## 🚀 Funcionalidades

- Criação de relatórios de status com dados estruturados
- Organização por localização (São Paulo e Rio de Janeiro)
- Sistema de feedback da gestão
- Histórico completo de atualizações
- Interface responsiva e amigável
- Suporte para múltiplos departamentos

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- React.js (versão 17 ou superior)
- Tailwind CSS
- @shadcn/ui components

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_SEU_REPOSITORIO]
cd [NOME_DO_DIRETORIO]
```

2. Instale as dependências:
```bash
npm install
```

3. Instale os componentes necessários do shadcn/ui:
```bash
npx shadcn-ui@latest add card
```

## 📦 Estrutura do Projeto

```
src/
  ├── components/
  │   └── StatusTracker/
  │       └── index.jsx
  ├── styles/
  │   └── globals.css
  └── ...
```

## 🛠️ Uso

1. Importe o componente em sua aplicação:
```jsx
import StatusTracker from './components/StatusTracker';
```

2. Utilize o componente:
```jsx
function App() {
  return (
    <div>
      <StatusTracker />
    </div>
  );
}
```

## 🔧 Configuração

### Personalização do Tema

O componente utiliza Tailwind CSS para estilização. Você pode personalizar as cores e estilos editando o arquivo `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // suas cores personalizadas
        },
      },
    },
  },
};
```

### Integração com SharePoint

Para integrar com o SharePoint, você precisará:

1. Criar uma lista no SharePoint com as colunas apropriadas
2. Configurar as permissões necessárias
3. Adaptar o componente para usar a API REST do SharePoint

## 📝 Features Planejadas

- [ ] Exportação de relatórios em PDF
- [ ] Filtros avançados de busca
- [ ] Sistema de notificações
- [ ] Múltiplos níveis de feedback
- [ ] Integração com MS Teams

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes

## 📫 Contato

[Seu Nome] - [seu.email@exemplo.com]

Link do projeto: [https://github.com/seu-usuario/seu-repositorio](https://github.com/rodolfomagno/statusreport)

## 🙏 Agradecimentos

- @shadcn/ui pela biblioteca de componentes
- Tailwind CSS pela framework de estilização

---

⭐️ From [rodolfomagno](https://github.com/rodolfomagno)