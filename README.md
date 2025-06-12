# 🚗 CarServiceTracker

CarServiceTracker to aplikacja webowa służąca do śledzenia historii napraw i przeglądów samochodów. Aplikacja została zbudowana w architekturze klient-serwer i uruchamiana jest w środowisku Kubernetes (MicroK8s).

---

## 🧰 Technologie

- Frontend: React (`wojcikkuba/carservice-frontend:latest`)
- Backend: Node.js + Express + PostgreSQL (`wojcikkuba/carservice-backend:latest`)
- Baza danych: PostgreSQL
- Orkiestracja: Kubernetes (MicroK8s)

---

## 🚀 Szybki start

### ✅ Wymagania wstępne

- Linux lub WSL2
- [MicroK8s](https://microk8s.io/) zainstalowany:
  ```bash
  sudo snap install microk8s --classic

## Uruchomienie

### 1. Klonowanie repo
```git clone https://gitlab.com/twoj_user/CarServiceTracker.git```
```cd CarServiceTracker/k8s```

### 2. Włączenie dodatków MicroK8s
```sudo microk8s start```
```sudo microk8s enable dns ingress```

### 3. Dodanie wpisu do /etc/hosts
#### a) otwarcie pliku /etc/hosts:
```sudo nano /etc/hosts```
#### b) dodaj na końcu tego pliku:
```127.0.0.1 carservice.local```
#### c) zapisz i zamknij (dla nano):
```Ctrl+O, Enter, Ctrl+X```

### 4. Zastosowanie manifestów k8s:
```
sudo microk8s kubectl apply -f postgres-secret.yaml
sudo microk8s kubectl apply -f postgres-deployment.yaml
sudo microk8s kubectl apply -f backend-deployment.yaml
sudo microk8s kubectl apply -f frontend-deployment.yaml
sudo microk8s kubectl apply -f ingress.yaml
```

### 5. Chwila odczekania na uruchomienie portów i sprawdzenie statusu:
```sudo microk8s kubectl get pods``` <- wszystkie mają mieć status running

### 6. Otwarcie aplikacji w przeglądarce pod adresem 
```http://carservice.local```

## Diagnostyka
### Podgląd logów backendu:
```sudo microk8s kubectl logs deployment/backend```
### Pełna lista zasobów:
```sudo microk8s kubectl get all```
