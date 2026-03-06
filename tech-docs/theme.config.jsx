export default {
  logo: <span>🚀 <b>Keem's Tech Docs</b></span>,
  project: {
    link: 'https://github.com/KeemWilliams/GithubWelcomePage'
  },
  docsRepositoryBase: 'https://github.com/KeemWilliams/GithubWelcomePage/tree/main/tech-docs',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} © Keem Williams. Built with Nextra.
      </span>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Wakeem Williams Docs'
    }
  }
}
