+------------------+
|      Users       |
+------------------+
| _id              |
| fullName         |
| email            |
| password         |
| role             |
| createdAt        |
+------------------+
          |
          | 1
          |
          | M
          ▼
+----------------------+
|  UploadedProjects    |
+----------------------+
| _id                  |
| userId (FK)          |
| projectName          |
| language             |
| zipFile              |
| uploadedAt           |
+----------------------+
          |
          | 1
          |
          | M
          ▼
+----------------------+
|     ScanHistory      |
+----------------------+
| _id                  |
| projectId (FK)       |
| userId (FK)          |
| status               |
| securityScore        |
| scannedAt            |
+----------------------+
          |
          | 1
          |
          | M
          ▼
+----------------------+
|   Vulnerabilities    |
+----------------------+
| _id                  |
| scanId (FK)          |
| severity             |
| category             |
| fileName             |
| lineNumber           |
| vulnerableCode       |
| secureCode           |
+----------------------+
          |
          | 1
          |
          | 1
          ▼
+----------------------+
|    AIResponses       |
+----------------------+
| _id                  |
| vulnerabilityId(FK)  |
| explanation          |
| recommendation       |
+----------------------+
          |
          | 1
          |
          | 1
          ▼
+----------------------+
|      Reports         |
+----------------------+
| _id                  |
| scanId (FK)          |
| reportName           |
| pdfPath              |
| createdAt            |
+----------------------+