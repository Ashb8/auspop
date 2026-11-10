# SQL Server Data Warehouse

End-to-end data warehouse portfolio project: ingest CRM and ERP source data, clean it through a Medallion pipeline, and model a star schema for analytics.

**Stack:** SQL Server · T-SQL · Medallion Architecture (Bronze → Silver → Gold) · Star Schema

![Data Architecture](docs/arch.png)

---

## What this project shows

| Layer | Purpose |
| --- | --- |
| **Bronze** | Load raw CRM/ERP CSV extracts into SQL Server as-is |
| **Silver** | Cleanse, standardize, and normalize for consistency |
| **Gold** | Business-ready star schema for reporting and analysis |

Also covered:

- ETL design for two source systems into one analytical model
- Dimensional modelling (facts + dimensions)
- Data catalog and naming conventions
- SQL analytics for customer, product, and sales questions

---

## Repository layout

```text
Data-Warehouse-SQL-Project/
├── datasets/          # CRM and ERP source CSVs
├── docs/              # Architecture diagrams, data catalog, models
├── scripts/
│   ├── init_database.sql
│   ├── bronze/        # Raw load scripts
│   ├── silver/        # Transform scripts
│   └── gold/          # Analytical model scripts
├── tests/             # Data quality checks
├── README.md
└── LICENSE
```

---

## How to explore

1. Review the architecture: [`docs/arch.png`](docs/arch.png), [`docs/data_flow.png`](docs/data_flow.png), [`docs/data_model.png`](docs/data_model.png)
2. Read the catalog: [`docs/data_catalog.md`](docs/data_catalog.md)
3. Run `scripts/init_database.sql`, then bronze → silver → gold in order
4. Use SQL Server Express + SSMS (or Azure Data Studio) locally

**Tools:** [SQL Server Express](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) · [SSMS](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)

---

## Skills demonstrated

SQL · ETL · Medallion DWH · Dimensional modelling · Data quality · Analytics reporting

---

## Author

**Ashutosh Ramesh Bhosale** — Data Engineer / Analyst based in Sydney, Australia. Open to roles across Australia.

[LinkedIn](https://www.linkedin.com/in/ashutosh-bhosalee/) · [GitHub](https://github.com/Ashb8)

---

## License

MIT — see [LICENSE](LICENSE).
