```mermaid
flowchart TD
    A[Notes App] -->|Form Input| B(Send)
    B -->|/new_note/| C[Server]
    C -->|/notes/| A