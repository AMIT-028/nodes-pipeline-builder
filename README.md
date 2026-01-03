# Nodes Pipeline Builder

A visual pipeline builder inspired by VectorShift, built as part of a frontend technical assessment.  
The application allows users to visually construct pipelines using draggable nodes, connect them with edges, and validate the pipeline structure via a backend service.

---

## ✨ Features

### Frontend (React + React Flow)
- Drag-and-drop node-based editor
- Node abstraction system for easy scalability
- Built-in node types:
  - Input
  - Text
  - LLM
  - Output
  - Math
  - Condition
  - Delay
  - Merge
  - Logger
- Dynamic node handles
- Dark, professional UI inspired by VectorShift
- Minimap, zoom controls, and grid snapping
- Delete nodes by dragging them into a delete zone
- Submit pipeline to backend for validation

### Backend (FastAPI)
- Receives pipeline data (nodes + edges)
- Calculates:
  - Total number of nodes
  - Total number of edges
  - Whether the pipeline is a valid DAG (Directed Acyclic Graph)
- Returns structured JSON response to the frontend

---

## 🧠 Node Abstraction

All nodes are built on top of a reusable `BaseNode` component, allowing:
- Consistent styling
- Configurable inputs & outputs
- Rapid creation of new node types
- Centralized UI and behavior changes

---

## 🛠 Tech Stack

**Frontend**
- React
- React Flow
- Zustand (state management)
- CSS (custom dark UI)

**Backend**
- Python
- FastAPI
- Uvicorn

---

## 🚀 How to Run the Project

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/AMIT-028/nodes-pipeline-builder.git
cd nodes-pipeline-builder


2️⃣ Run the Backend
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
Backend will start at:
uvicorn main:app --reload

3️⃣ Run the Frontend
cd frontend
npm install
npm start
Frontend will start at:
http://localhost:3000




