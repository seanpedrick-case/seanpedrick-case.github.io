// Project data for the site. Edit this list to add, remove or reorder projects.
// - featured: true  -> shown in the "Featured" section (and in "All projects")
// - links: GitHub repo plus optional live demo / docs links
const PROJECTS = [
  {
    name: "doc_redaction",
    description: "Redact PDF/image-based documents, Word, or CSV/XLSX files using a graphical user interface. Detects PII and redacts it, with optional VLM-based extraction.",
    repo: "https://github.com/seanpedrick-case/doc_redaction",
    links: [
      { label: "Live demo", url: "https://huggingface.co/spaces/seanpedrickcase/document_redaction_vlm" }
    ],
    tags: ["Python", "Gradio", "PII", "Redaction", "OCR/VLM"],
    stars: 64,
    featured: true
  },
  {
    name: "llm_topic_modelling",
    description: "Large language model topic modelling / thematic summarisation of tabular open text data — built for consultations, surveys and other one-to-many question-answer data.",
    repo: "https://github.com/seanpedrick-case/llm_topic_modelling",
    links: [
      { label: "Live demo", url: "https://huggingface.co/spaces/seanpedrickcase/llm_topic_modelling" },
      { label: "Topic modelling space", url: "https://huggingface.co/spaces/seanpedrickcase/topic_modelling" }
    ],
    tags: ["Python", "LLM", "Topic modelling", "Thematic analysis"],
    featured: true
  },
  {
    name: "fuzzy_address_matcher",
    description: "Match address data files together (CSV, XLSX, Parquet) using fuzzy matching (rapidfuzz) with an optional GUI. Built for UK addresses.",
    repo: "https://github.com/seanpedrick-case/fuzzy_address_matcher",
    links: [
      { label: "Live demo", url: "https://huggingface.co/spaces/seanpedrickcase/fuzzy_address_matcher" }
    ],
    tags: ["Python", "Record linkage", "Fuzzy matching", "UK addresses"],
    featured: false
  },
  {
    name: "light-pdf-web-qa-chatbot",
    description: "Query PDFs or webpages using a lightweight language model for quick responses — runs even on CPU, no GPU needed.",
    repo: "https://github.com/seanpedrick-case/light-pdf-web-qa-chatbot",
    links: [
      { label: "Live demo", url: "https://huggingface.co/spaces/seanpedrickcase/Light-PDF-Web-QA-Chatbot" }
    ],
    tags: ["Python", "RAG", "CPU-only LLM", "Gradio"],
    featured: true
  },
  {
    name: "topic_modelling",
    description: "Topic model tabular data using BERTopic — an earlier-stage experiment, a little less developed than the other tools here.",
    repo: "https://github.com/seanpedrick-case/topic_modelling",
    links: [
      { label: "Live demo", url: "https://huggingface.co/spaces/seanpedrickcase/topic_modelling" }
    ],
    tags: ["Python", "BERTopic", "Topic modelling"],
    featured: false
  }
];
