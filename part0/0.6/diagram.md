```mermaid
flowchart TD
    A[Notes App] -->|Form Input| B(Send)
    B --> |preventDefault| C{App Logic}
    C --> |/new_note_spa/| D[Server]
    D --> |Note Created| C
    C --> |DOM Update| A