<!-- markdownlint-disable MD033 MD041 -->
<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0D1117,100:58A6FF&height=180&section=header&text=Hey,%20I'm%20Keem.&fontSize=50&fontColor=FFFFFF&animation=fadeIn&fontAlignY=35&desc=Full-Stack%20Engineer%20%7C%20K3s%20%7C%20GitOps%20%7C%20Zero-Trust&descAlignY=55&descColor=8B949E&descSize=18" alt="Wakeem Williams - Full-Stack Engineer" width="100%" />
</div>

<div align="center">
  <img src="https://skillicons.dev/icons?i=linux,docker,kubernetes,go,python,ts,postgres,grafana,prometheus,cloudflare" alt="Tech stack: Linux, Docker, Kubernetes, Go, Python, TypeScript, PostgreSQL, Grafana, Prometheus, Cloudflare" />
</div>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=KeemWilliams&color=blueviolet&style=flat-square&label=Profile+Views" alt="Profile view counter" />
</p>

<p align="center">
  <b>Currently Building:</b> Zero-Trust identity mesh with
  <a href="https://github.com/KeemWilliams/helix-stax-infra">HelixStax</a> —
  self-hosted Authentik + NetBird on K3s.
</p>

---

## About

I'm **Wakeem Williams**, a Full-Stack Engineer building everything from frontend to bare metal -- architecture, backend, infrastructure, and AI pipelines. Tech shouldn't feel like a black box. I build self-healing, structurally honest platforms that prioritize transparency over abstraction and ownership over convenience.

---

## Featured Projects

| Project | Description | Stack | Status |
|:--------|:------------|:------|:------:|
| [HelixStax](https://github.com/KeemWilliams/helix-stax-infra) | Full infrastructure platform — GitOps, Zero-Trust identity mesh, monitoring, and AI pipelines on Hetzner bare metal | K3s, Devtron, Authentik, NetBird, Cloudflare | Active |
| [Devtron MCP Server](https://github.com/KeemWilliams/devtron-mcp-server) | Open-source MCP server bridging AI agents to CI/CD pipelines | TypeScript, MCP Protocol | Active |
| [Vacancy Services](https://docs.wakeemwilliams.com/projects/vacancy-services) | Logistics optimization platform | Full-Stack, PostgreSQL | In Progress |

---

## Architecture

```mermaid
graph TD
    User([Users]) -->|HTTPS| CF[Cloudflare Edge]

    subgraph Identity Plane - CX32 VM
        Auth[Authentik SSO]
        NB[NetBird VPN]
    end

    subgraph K3s Cluster - Hetzner
        CF -->|Origin CA| TR[Traefik v3]
        TR --> Apps[Workloads]
        TR --> Mon[Prometheus + Grafana]
        Apps --> DB[(PostgreSQL)]
        Apps --> AI[Ollama + n8n]
    end

    Auth -.->|OIDC| TR
    NB -.->|WireGuard| TR
    DB -->|Backup| S3[(AWS S3)]
```

---

## Tech Stack

**Infrastructure**: K3s on AlmaLinux 9.7 | Hetzner Cloud | Cloudflare Edge
**Orchestration**: Devtron (GitOps) | Traefik v3 | Flannel CNI
**Identity**: Authentik (OIDC/SAML) | NetBird (Zero-Trust VPN)
**Data**: PostgreSQL | pgvector | Longhorn CSI
**Monitoring**: Prometheus | Grafana | Loki
**AI/Automation**: Ollama | n8n | Open WebUI | SearXNG
**Languages**: Go | Python | TypeScript

<details>
<summary><strong>Full stack breakdown with costs and rationale</strong></summary>

See [docs/tech-stack.md](https://github.com/KeemWilliams/KeemWilliams/blob/main/docs/tech-stack.md) for the complete deep-dive including monthly costs, complexity ratings, and tool selection rationale.

</details>

[Browse the full technical documentation](https://docs.wakeemwilliams.com)

---

## GitHub Activity

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=KeemWilliams&show_icons=true&theme=transparent&hide_border=true" alt="Wakeem's GitHub stats" height="165" />
  <img src="https://github-readme-streak-stats.herokuapp.com?user=KeemWilliams&theme=transparent&hide_border=true" alt="Wakeem's GitHub streak" height="165" />
</div>

---

## Roadmap

- [ ] Complete Zero-Trust identity mesh (Authentik + NetBird + Cloudflare)
- [ ] Publish K3s provisioning runbooks as open-source templates
- [ ] Integrate Cloudflare Turnstile bot-protection on public portals
- [ ] Worker node integration for multi-node K3s cluster

---

## Contributing

Interested in infrastructure-as-code, GitOps, or Zero-Trust networking? Check the open issues on [HelixStax](https://github.com/KeemWilliams/helix-stax-infra/issues) or [Devtron MCP Server](https://github.com/KeemWilliams/devtron-mcp-server/issues). PRs and discussions welcome.

---

## Connect

<div align="center">
  <a href="https://calendly.com/wakeemwilliams">
    <img src="https://img.shields.io/badge/Book_a_Call-Calendly-006BFF?style=for-the-badge&logo=calendly&logoColor=white" alt="Book a chat with Wakeem on Calendly" />
  </a>
  &nbsp;
  <a href="https://www.linkedin.com/in/wakeemwilliams">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Connect with Wakeem on LinkedIn" />
  </a>
  &nbsp;
  <a href="https://x.com/wakeemwilliams">
    <img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="Follow Wakeem on X" />
  </a>
  &nbsp;
  <a href="https://docs.wakeemwilliams.com">
    <img src="https://img.shields.io/badge/Docs-wakeemwilliams.com-blue?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Browse technical documentation" />
  </a>
</div>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0D1117,100:58A6FF&height=120&section=footer" alt="Footer" width="100%" />
</div>
