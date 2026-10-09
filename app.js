/**
 * Tech Books Showcase - Interactive Logic
 * Handles dynamic book rendering, instant search, category filtering,
 * modal preview management, and toast notifications.
 */

// Comprehensive Dataset of Tech Books
const TECH_BOOKS = [
  {
    id: 'book-1',
    category: 'system-design',
    categoryLabel: 'هندسة النظم & Backend',
    title: 'هندسة النظم الموزعة الفائقة',
    englishTitle: 'Distributed Systems Architecture at Scale',
    author: 'د. طارق المنصور',
    level: 'متقدم',
    levelClass: 'badge-level',
    rating: 4.95,
    reviewsCount: 384,
    pages: 485,
    year: '2026',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #1E1B4B 0%, #0F172A 100%)',
    accentColor: '#818CF8',
    summary: 'دليل عملي شامل لتصميم وبناء أنظمة موزعة تتحمل ملايين الطلبات، مع التركيز على Event-Driven Architecture و Caching و Consensus Algorithms.',
    takeaways: [
      'فهم عميق لنظرية CAP و Consensus protocols (Raft, Paxos)',
      'تصميم خطوط معالجة الأحداث الموزعة عبر Kafka و gRPC',
      'إدارة التجزئة (Partitioning) والتكرار (Replication) في قواعد البيانات الموزعة'
    ],
    toc: [
      { num: 'الفصل 01', title: 'مبادئ النظم الموزعة وتحديات التزامن' },
      { num: 'الفصل 02', title: 'معمارية الأحداث (Event-Driven) والرسائل الموثوقة' },
      { num: 'الفصل 03', title: 'خوارزميات الإجماع وإدارة الحالة المشتركة' },
      { num: 'الفصل 04', title: 'المرونة والتعافي من الأعطال (Fault Tolerance & Chaos)' },
      { num: 'الفصل 05', title: 'المراقبة الموزعة (Distributed Tracing & Metrics)' }
    ],
    codeSnippet: `// Example: Distributed Saga Pattern Coordinator
type TransactionStatus string

const (
    StatusPending   TransactionStatus = "PENDING"
    StatusCommitted TransactionStatus = "COMMITTED"
    StatusRolledBack TransactionStatus = "ROLLED_BACK"
)

func (s *SagaOrchestrator) ExecuteStep(ctx context.Context, step SagaStep) error {
    if err := step.Action(ctx); err != nil {
        return s.Compensate(ctx, step)
    }
    return nil
}`
  },
  {
    id: 'book-2',
    category: 'ai',
    categoryLabel: 'الذكاء الاصطناعي & ML',
    title: 'أسرار هندسة النماذج اللغوية و LLMs',
    englishTitle: 'LLM Engineering & Production Systems',
    author: 'م. سامي الحربي',
    level: 'متوسط إلى متقدم',
    levelClass: 'badge-level',
    rating: 4.92,
    reviewsCount: 412,
    pages: 420,
    year: '2026',
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #042F2E 0%, #022C22 100%)',
    accentColor: '#2DD4BF',
    summary: 'من الأساسيات الرياضية إلى نشر وكلاء الذكاء الاصطناعي (AI Agents) في بيئات الإنتاج الحقيقية باستخدام RAG، التقييم الآلي، والتحكم في تكلفة الاستدعاءات.',
    takeaways: [
      'بناء محركات RAG متطورة مع إعادة الترتيب (Reranking) وفهارس المتجهات',
      'تصميم نظم الوكلاء الذاتية (Autonomous Multi-Agent Orchestration)',
      'تقنيات Fine-Tuning و Quantization لتشغيل النماذج محلياً'
    ],
    toc: [
      { num: 'الفصل 01', title: 'بنية نماذج Transformer والآليات الداخلية' },
      { num: 'الفصل 02', title: 'هندسة التوجيه المتقدمة (Advanced Prompt Engineering)' },
      { num: 'الفصل 03', title: 'تقنيات الـ RAG الهجينة والبحث الدلالي' },
      { num: 'الفصل 04', title: 'برمجة الوكلاء التعاونيين (Multi-Agent Workflows)' },
      { num: 'الفصل 05', title: 'الحوكمة، التقييم، والأمان للنماذج الذكية' }
    ],
    codeSnippet: `# Production Hybrid RAG Pipeline
from dataclasses import dataclass

@dataclass
class RetrievedDocument:
    id: str
    content: str
    semantic_score: float
    bm25_score: float

def rank_documents(docs: list[RetrievedDocument], alpha: float = 0.7) -> list[RetrievedDocument]:
    return sorted(docs, key=lambda d: alpha * d.semantic_score + (1 - alpha) * d.bm25_score, reverse=True)`
  },
  {
    id: 'book-3',
    category: 'frontend',
    categoryLabel: 'تطوير الواجهات & Web',
    title: 'معمارية الواجهات وتطبيقات الويب الحديثة',
    englishTitle: 'Modern Frontend Architecture & Web Performance',
    author: 'م. ريان الأحمد',
    level: 'متوسط',
    levelClass: 'badge-level',
    rating: 4.88,
    reviewsCount: 295,
    pages: 375,
    year: '2026',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #0C4A6E 0%, #082F49 100%)',
    accentColor: '#38BDF8',
    summary: 'كيف تبني تطبيقات ويب عملاقة قابلة للتوسع والصيانة، مع التركيز على إدارة الحالة المعقدة، أنظمة التصميم (Design Systems)، وتحقيق درجات 100 في Core Web Vitals.',
    takeaways: [
      'تطبيق أنظمة التصميم المبنية على المكونات المعيارية والـ Tokens',
      'تحسين سرعة التحميل واستهلاك الذاكرة في التطبيقات كثيفة البيانات',
      'إدارة الحالة الموزعة والمعمارية المعيارية (Micro-frontends)'
    ],
    toc: [
      { num: 'الفصل 01', title: 'تطور معمارية الواجهات وفلسفة التجريد' },
      { num: 'الفصل 02', title: 'أنظمة التصميم و CSS الحديث على نطاق واسع' },
      { num: 'الفصل 03', title: 'استراتيجيات إدارة الحالة والتخزين المؤقت' },
      { num: 'الفصل 04', title: 'تحسين الأداء وسرعة الاستجابة (Core Web Vitals)' },
      { num: 'الفصل 05', title: 'اختبار الواجهات الشامل (E2E, Component, Visual Regression)' }
    ],
    codeSnippet: `// Modern State Machine for Async Data Flow
type State<T> = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

export function isReady<T>(state: State<T>): state is { status: 'success'; data: T } {
  return state.status === 'success';
}`
  },
  {
    id: 'book-4',
    category: 'devops',
    categoryLabel: 'السحابة & DevOps',
    title: 'إتقان السحابة الأصلية و DevOps المتقدم',
    englishTitle: 'Cloud-Native Engineering & Advanced DevOps',
    author: 'م. عمر خالد',
    level: 'متقدم',
    levelClass: 'badge-level',
    rating: 4.90,
    reviewsCount: 260,
    pages: 512,
    year: '2026',
    icon: '☁️',
    gradient: 'linear-gradient(135deg, #3B0764 0%, #1E0533 100%)',
    accentColor: '#C084FC',
    summary: 'من البنية التحتية ككود (Terraform) إلى إدارة مجموعات Kubernetes المتعددة، وبناء خطوط CI/CD مؤتمتة بنهج GitOps الصارم.',
    takeaways: [
      'إدارة مجموعات Kubernetes الضخمة باستخدام Helm و ArgoCD',
      'تطبيق ممارسات GitOps والتحكم في النسخ والأمان',
      'بناء شبكات الخدمة (Service Mesh) باستخدام Istio و Envoy'
    ],
    toc: [
      { num: 'الفصل 01', title: 'فلسفة السحابة الأصلية (Cloud-Native Paradigm)' },
      { num: 'الفصل 02', title: 'هندسة Kubernetes المتقدمة وتخصيص الموارد' },
      { num: 'الفصل 03', title: 'البنية التحتية ككود (IaC) مع Terraform و OpenTofu' },
      { num: 'الفصل 04', title: 'خطوط النشر المؤتمتة باستخدام ArgoCD و GitOps' },
      { num: 'الفصل 05', title: 'الموثوقية وهندسة الفوضى (Chaos Engineering)' }
    ],
    codeSnippet: `# Kubernetes Production Pod Topology Spread
apiVersion: apps/v1
kind: Deployment
metadata:
  name: core-api-service
spec:
  replicas: 5
  template:
    spec:
      topologySpreadConstraints:
      - maxSkew: 1
        topologyKey: topology.kubernetes.io/zone
        whenUnsatisfiable: DoNotSchedule`
  },
  {
    id: 'book-5',
    category: 'security',
    categoryLabel: 'الأمن السيبراني & SecOps',
    title: 'هندسة الأمن السيبراني والدفاع الاستباقي',
    englishTitle: 'Proactive Cyber Defense & Secure Architecture',
    author: 'د. هند الدوسري',
    level: 'متقدم',
    levelClass: 'badge-level',
    rating: 4.94,
    reviewsCount: 310,
    pages: 440,
    year: '2026',
    icon: '🛡️',
    gradient: 'linear-gradient(135deg, #4C0519 0%, #1C0208 100%)',
    accentColor: '#FB7185',
    summary: 'دليل عملي لبناء أنظمة محصنة ضد الهجمات المتقدمة، وتطبيق مبدأ Zero Trust، وحماية سلاسل التوريد البرمجية (Supply Chain Security).',
    takeaways: [
      'تطبيق معمارية Zero Trust في الشبكات السحابية والمحلية',
      'حماية الكود وسلاسل التوريد (SBOM & Cryptographic Signing)',
      'الاستجابة للحوادث والتحليل الجنائي الرقمي'
    ],
    toc: [
      { num: 'الفصل 01', title: 'مبادئ التحصين الأمني ونمذجة التهديدات (Threat Modeling)' },
      { num: 'الفصل 02', title: 'تطبيق معمارية الثقة المعدومة (Zero Trust Framework)' },
      { num: 'الفصل 03', title: 'تأمين سلاسل التوريد وحاويات البرمجيات' },
      { num: 'الفصل 04', title: 'التشفير التطبيقي وإدارة المفاتيح الحساسة' },
      { num: 'الفصل 05', title: 'أتمتة الفحص الأمني داخل خطوط CI/CD (DevSecOps)' }
    ],
    codeSnippet: `// Cryptographic Signature Verification
import { createVerify } from 'crypto';

export function verifySoftwareArtifact(payload: Buffer, signature: Buffer, publicKey: string): boolean {
  const verifier = createVerify('SHA256');
  verifier.update(payload);
  verifier.end();
  return verifier.verify(publicKey, signature);
}`
  },
  {
    id: 'book-6',
    category: 'frontend',
    categoryLabel: 'تطوير الواجهات & UI/UX',
    title: 'تصميم تجربة المستخدم للمطورين والمهندسين',
    englishTitle: 'UI/UX Design for Software Engineers',
    author: 'م. نادية كمال',
    level: 'مبتدئ إلى متوسط',
    levelClass: 'badge-level',
    rating: 4.87,
    reviewsCount: 198,
    pages: 315,
    year: '2026',
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #451A03 0%, #1C0A02 100%)',
    accentColor: '#F59E0B',
    summary: 'كتاب موجه للمطورين لاكتساب حس بصري وتصميمي رفيع، مع فهم القواعد النفسية لتجربة المستخدم، التباين، والطباعة، وإمكانية الوصول (Accessibility).',
    takeaways: [
      'قواعد اختيار الألوان والتباين المريح للعين ومعايير WCAG',
      'هندسة الطباعة وحجم النصوص في لوحات التحكم والتطبيقات المعقدة',
      'تصميم مسارات تفاعلية تقلل من الإجهاد الذهني للمستخدم'
    ],
    toc: [
      { num: 'الفصل 01', title: 'العين والدماغ: كيف يتفاعل المستخدم مع الشاشات؟' },
      { num: 'الفصل 02', title: 'التراتبية البصرية (Visual Hierarchy) واستغلال الفراغ' },
      { num: 'الفصل 03', title: 'علم الألوان الرقمية وبناء لوحات متناسقة' },
      { num: 'الفصل 04', title: 'تصميم النماذج (Forms) وتجربة الإدخال السلسة' },
      { num: 'الفصل 05', title: 'إتاحة الوصول (Accessibility) كمعيار هندسي أساسي' }
    ],
    codeSnippet: `/* Accessible High-Contrast Focus Ring */
:focus-visible {
  outline: 2px solid #38BDF8;
  outline-offset: 3px;
  border-radius: 4px;
  transition: outline-offset 150ms ease;
}`
  }
];

// App State
let currentCategory = 'all';
let searchQuery = '';

// DOM Elements
const booksGridEl = document.getElementById('books-grid');
const searchInputEl = document.getElementById('search-input');
const filterChipsEl = document.getElementById('filter-chips');
const resultsCountTextEl = document.getElementById('results-count-text');
const previewModalEl = document.getElementById('preview-modal');
const modalCloseBtnEl = document.getElementById('modal-close-btn');
const modalBookTitleEl = document.getElementById('modal-book-title');
const modalCategoryBadgeEl = document.getElementById('modal-category-badge');
const modalBodyContentEl = document.getElementById('modal-body-content');
const featuredPreviewBtnEl = document.getElementById('featured-preview-btn');
const newsletterFormEl = document.getElementById('newsletter-form');
const toastEl = document.getElementById('toast-notice');
const toastMessageEl = document.getElementById('toast-message');

// Initialize App
function init() {
  updateCategoryCounts();
  renderBooks();
  setupEventListeners();
}

// Calculate and render category counts
function updateCategoryCounts() {
  const counts = {
    all: TECH_BOOKS.length,
    ai: 0,
    'system-design': 0,
    frontend: 0,
    devops: 0,
    security: 0
  };

  TECH_BOOKS.forEach(book => {
    if (counts[book.category] !== undefined) {
      counts[book.category]++;
    }
  });

  for (const [category, count] of Object.entries(counts)) {
    const countEl = document.getElementById(`count-${category}`);
    if (countEl) countEl.textContent = count;
  }
}

// Render Book Cards to Grid
function renderBooks() {
  const filteredBooks = TECH_BOOKS.filter(book => {
    const matchesCategory = currentCategory === 'all' || book.category === currentCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = query === '' || 
      book.title.toLowerCase().includes(query) ||
      book.englishTitle.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.summary.toLowerCase().includes(query) ||
      book.categoryLabel.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Update count text
  if (resultsCountTextEl) {
    if (filteredBooks.length === TECH_BOOKS.length) {
      resultsCountTextEl.textContent = `عرض جميع الإصدارات والمراجع (${filteredBooks.length} كتب)`;
    } else {
      resultsCountTextEl.textContent = `تم العثور على ${filteredBooks.length} من أصل ${TECH_BOOKS.length} مرجعاً`;
    }
  }

  // Handle empty state
  if (filteredBooks.length === 0) {
    booksGridEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔎</div>
        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">لم يتم العثور على نتائج</h3>
        <p style="color: var(--text-muted); max-width: 400px; margin: 0 auto 1.5rem;">
          لا توجد كتب تطابق بحثك حالياً. جرّب كلمات بحث مختلفة أو تصفح باقي التصنيفات.
        </p>
        <button class="btn btn-secondary btn-sm" id="reset-filters-btn">إعادة ضبط الفلاتر</button>
      </div>
    `;
    const resetBtn = document.getElementById('reset-filters-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        currentCategory = 'all';
        searchQuery = '';
        if (searchInputEl) searchInputEl.value = '';
        updateActiveChip();
        renderBooks();
      });
    }
    return;
  }

  // Generate cards
  booksGridEl.innerHTML = filteredBooks.map(book => `
    <article class="book-card" data-id="${book.id}">
      <div class="card-top">
        <div class="card-book-cover" style="background: ${book.gradient}; border-color: ${book.accentColor}44;">
          <div class="cover-badge" style="color: ${book.accentColor}; border-color: ${book.accentColor}55;">
            ${book.year}
          </div>
          <div class="cover-center">
            <div class="cover-tech-icon">${book.icon}</div>
            <div class="cover-title" style="font-size: 1.05rem;">${book.title}</div>
            <div class="cover-subtitle" style="font-size: 0.75rem;">${book.englishTitle}</div>
          </div>
          <div class="cover-footer" style="font-size: 0.75rem;">
            <span>${book.author}</span>
          </div>
        </div>
      </div>

      <div class="card-content">
        <div class="card-meta-tags">
          <span class="badge ${book.levelClass}">${book.level}</span>
          <span class="badge badge-tag">${book.categoryLabel.split('&')[0].trim()}</span>
        </div>

        <h3 class="card-book-title">${book.title}</h3>
        <p class="card-book-desc">${book.summary}</p>

        <div class="card-details">
          <span>📄 ${book.pages} صفحة</span>
          <div class="rating-star">
            <span>★</span>
            <span>${book.rating}</span>
            <span style="color: var(--text-faint); font-size: 0.75rem;">(${book.reviewsCount})</span>
          </div>
        </div>

        <div class="card-actions">
          <button class="btn btn-secondary btn-sm preview-btn" data-id="${book.id}">
            <span>معاينة الفهرس</span>
          </button>
          <button class="btn btn-primary btn-sm get-book-btn" data-id="${book.id}">
            <span>احصل على النسخة</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Setup Event Listeners
function setupEventListeners() {
  // Search input handler with debounce
  if (searchInputEl) {
    let debounceTimer;
    searchInputEl.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        searchQuery = e.target.value;
        renderBooks();
      }, 150);
    });
  }

  // Category Filter Chips
  if (filterChipsEl) {
    filterChipsEl.addEventListener('click', (e) => {
      const chipBtn = e.target.closest('.filter-chip');
      if (!chipBtn) return;

      currentCategory = chipBtn.dataset.category || 'all';
      updateActiveChip();
      renderBooks();
    });
  }

  // Books Grid Actions (Event Delegation)
  if (booksGridEl) {
    booksGridEl.addEventListener('click', (e) => {
      const previewBtn = e.target.closest('.preview-btn');
      if (previewBtn) {
        const bookId = previewBtn.dataset.id;
        openBookPreview(bookId);
        return;
      }

      const getBookBtn = e.target.closest('.get-book-btn');
      if (getBookBtn) {
        const bookId = getBookBtn.dataset.id;
        const book = TECH_BOOKS.find(b => b.id === bookId);
        showToast(`تم بدء تجهيز رابط تحميل نسخة "${book ? book.title : ''}"!`);
        return;
      }
    });
  }

  // Featured Book Preview in Hero
  if (featuredPreviewBtnEl) {
    featuredPreviewBtnEl.addEventListener('click', () => {
      openBookPreview('book-1');
    });
  }

  // Modal Close Events
  if (modalCloseBtnEl) {
    modalCloseBtnEl.addEventListener('click', closeBookPreview);
  }

  if (previewModalEl) {
    previewModalEl.addEventListener('click', (e) => {
      if (e.target === previewModalEl) {
        closeBookPreview();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && previewModalEl.classList.contains('active')) {
      closeBookPreview();
    }
  });

  // Newsletter Form
  if (newsletterFormEl) {
    newsletterFormEl.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      const email = emailInput ? emailInput.value : '';
      if (email) {
        showToast(`شكراً لاشتراكك! تم إرسال الفصل المجاني إلى ${email}`);
        newsletterFormEl.reset();
      }
    });
  }
}

// Update Active Chip state
function updateActiveChip() {
  const chips = document.querySelectorAll('.filter-chip');
  chips.forEach(chip => {
    const isActive = chip.dataset.category === currentCategory;
    chip.classList.toggle('active', isActive);
    chip.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });
}

// Open Book Preview Modal
function openBookPreview(bookId) {
  const book = TECH_BOOKS.find(b => b.id === bookId);
  if (!book) return;

  modalBookTitleEl.textContent = book.title;
  modalCategoryBadgeEl.textContent = book.categoryLabel;

  modalBodyContentEl.innerHTML = `
    <div class="modal-book-overview">
      <div class="card-book-cover" style="background: ${book.gradient}; border-color: ${book.accentColor}55;">
        <div class="cover-badge" style="color: ${book.accentColor};">${book.year}</div>
        <div class="cover-center">
          <div class="cover-tech-icon">${book.icon}</div>
          <div class="cover-title" style="font-size: 1rem;">${book.title}</div>
          <div class="cover-subtitle" style="font-size: 0.7rem;">${book.englishTitle}</div>
        </div>
        <div class="cover-footer" style="font-size: 0.7rem;">
          <span>${book.author}</span>
        </div>
      </div>

      <div>
        <p style="font-size: 1.05rem; color: var(--text-main); margin-bottom: 1.25rem; line-height: 1.7;">
          ${book.summary}
        </p>

        <h4 style="font-size: 1rem; color: var(--accent-cyan); margin-bottom: 0.75rem;">🎯 أهم المخرجات العملية التي ستتعلمها:</h4>
        <ul style="padding-right: 1.25rem; color: var(--text-muted); font-size: 0.92rem; line-height: 1.8;">
          ${book.takeaways.map(item => `<li>${item}</li>`).join('')}
        </ul>

        <div style="margin-top: 1.5rem; display: flex; gap: 1rem; align-items: center;">
          <button class="btn btn-primary btn-sm" onclick="showToast('تم إرسال نموذج المعاينة الكامل إلى بريدك!')">
            تحميل عينة PDF مجانية (أول 30 صفحة)
          </button>
        </div>
      </div>
    </div>

    <div style="border-top: 1px solid var(--border-subtle); padding-top: 2rem;">
      <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem;">📑 فهرس الفصول ومحتويات الكتاب:</h4>
      <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1rem;">
        تم تنظيم فصول الكتاب لتبدأ من الأساسيات وتنتقل سريعاً إلى بناء مشاريع الإنتاج المعقدة.
      </p>

      <ul class="toc-list">
        ${book.toc.map(item => `
          <li class="toc-item">
            <span>${item.title}</span>
            <span class="toc-number">${item.num}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="border-top: 1px solid var(--border-subtle); padding-top: 2rem; margin-top: 1.5rem;">
      <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem;">💻 مقتطف من الكود المصدري المرفق:</h4>
      <p style="color: var(--text-muted); font-size: 0.88rem;">
        عينة من الأكواد التطبيقية المتوفرة في مستودع GitHub التابع للكتاب:
      </p>
      <pre class="code-snippet-box"><code>${escapeHtml(book.codeSnippet)}</code></pre>
    </div>
  `;

  previewModalEl.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close Book Preview Modal
function closeBookPreview() {
  previewModalEl.classList.remove('active');
  document.body.style.overflow = '';
}

// Helper: Escape HTML
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Show Toast Notification
let toastTimeout;
function showToast(message) {
  if (!toastEl) return;
  toastMessageEl.textContent = message;
  toastEl.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 3800);
}

// Make showToast accessible globally for inline handlers
window.showToast = showToast;

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', init);
