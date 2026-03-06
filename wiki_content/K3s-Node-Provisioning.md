# ☸️ K3s Node Provisioning Runbook

This guide covers the exact idempotent steps I take to provision a new compute node on **Hetzner Cloud** or **Bare Metal**.

## 🛠️ Prerequisites

- **OS:** AlmaLinux 9.x (Minimal)
- **Architecture:** x86_64 or ARM64
- **Network:** Static IP + NetBird agent installed.

## 🚀 1. Base OS Hardening

Before installing K3s, I run an Ansible playbook to:
1. Disable SELinux (or set to permissive for K3s compliance).
2. Configure firewalld with Kube-proxy rules.
3. Optimize sysctl for high-concurrency network traffic.

## 📦 2. K3s Installation

I use a custom installation script to ensure the node joins the cluster over the **NetBird private mesh** rather than the public IP.

```bash
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server \
  --node-ip=<NETBIRD_IP> \
  --node-external-ip=<PUBLIC_IP> \
  --flannel-iface=wt0 \
  --disable traefik" sh -
```

## 🧠 Why --disable traefik?

I manage my Ingress Controller (Traefik) separately via **ArgoCD** and Helm charts. This allows for better configuration of Middleware (like Authentik forward-auth) compared to the default K3s installation.

---

[← Back to Home](./Home)
