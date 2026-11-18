// Blog posts, listed oldest to newest (the site sorts newest-first when rendering).
// Add new posts at the end of this array.
// - date: ISO date used for sorting (use the 1st if only the month is known)
// - display: the date shown on the site
// - url: full article (for now these live with the doc_redaction docs site)
const POSTS = [
  {
    title: "Redaction with local VLM and LLMs",
    date: "2026-02-01",
    display: "February 2026",
    summary: "Testing local vision-language models from the Qwen 3 VL family against traditional OCR tools for identifying text and bounding boxes in difficult documents (handwriting, unclear text). Superseded by the Qwen 3.5 article as of March 2026.",
    url: "https://seanpedrick-case.github.io/doc_redaction/src/redaction_with_vlm_and_llms.html",
    tags: ["doc_redaction", "VLM", "OCR", "Qwen 3 VL"]
  },
  {
    title: "OCR and redaction with Qwen 3.5",
    date: "2026-03-01",
    display: "March 2026",
    summary: "How doc_redaction moved from traditional OCR (Tesseract, PaddleOCR, spaCy, AWS Textract/Comprehend) to local vision language models — OCR and redaction with Qwen 3.5, deployed on-device.",
    url: "https://seanpedrick-case.github.io/doc_redaction/src/ocr_and_redaction_with_qwen35.html",
    tags: ["doc_redaction", "OCR", "Redaction", "Qwen 3.5"]
  },
  {
    title: "Agents for document redaction and review tasks (open vs closed-source)",
    date: "2026-04-27",
    display: "27 April 2026",
    summary: "Can agents perform end-to-end document redaction and review? Comparing closed models (Sonnet 4.6) against small local open models — with privacy giving a strong incentive to run locally.",
    url: "https://seanpedrick-case.github.io/doc_redaction/src/agentic_redaction.html",
    tags: ["doc_redaction", "Agents", "LLM", "Open vs closed source"]
  },
  {
    title: "Agentic Document Redaction with Qwen 3.6 27B",
    date: "2026-06-27",
    display: "27 June 2026",
    summary: "Harnessing agent workflows with a local model (Qwen 3.6 27B) for context-aware, end-to-end redaction through the app's GUI — building on the earlier agentic redaction experiments.",
    url: "https://seanpedrick-case.github.io/doc_redaction/src/agentic_redaction_with_gui.html",
    tags: ["doc_redaction", "Agents", "Qwen 3.6", "GUI"]
  }
];
