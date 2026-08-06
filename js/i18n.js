/* ============================================================
   JEBI HUB — i18n Internationalization System
   Languages: EN (English) / ZH (Mandarin) / AR (Arabic)
   ============================================================ */

const I18N = {
  /* ---------- Navigation ---------- */
  "nav.home": { en: "Home", zh: "首页", ar: "الرئيسية" },
  "nav.modules": { en: "Modules", zh: "模块", ar: "الوحدات" },
  "nav.carbon_data": { en: "Carbon Data", zh: "碳数据", ar: "بيانات الكربون" },
  "nav.industry_chain": { en: "Industry Chain", zh: "产业链", ar: "سلسلة الصناعة" },
  "nav.carbon_economy": { en: "Carbon Economy", zh: "碳经济", ar: "اقتصاد الكربون" },
  "nav.private_central_bank": { en: "Private Central Bank", zh: "私人央行", ar: "البنك المركزي الخاص" },
  "nav.about": { en: "About", zh: "关于", ar: "حول" },

  /* ---------- Nav Dropdown Items ---------- */
  "nav.planting": { en: "Aeroponic Planting", zh: "种植链", ar: "الزراعة الهوائية" },
  "nav.processing": { en: "Low-Carbon Processing", zh: "低碳加工", ar: "المعالجة منخفضة الكربون" },
  "nav.trade": { en: "Digital Trade", zh: "数字贸易", ar: "التجارة الرقمية" },
  "nav.roasting": { en: "Roasting Space", zh: "烘焙空间", ar: "مساحة التحميص" },
  "nav.ip_trading": { en: "IP Trading Center", zh: "IP交易中心", ar: "مركز تداول الملكية الفكرية" },
  "nav.coffee_bank": { en: "Coffee Bank", zh: "咖啡银行", ar: "بنك القهوة" },
  "nav.crowdfunding": { en: "Low-Carbon Crowdfunding", zh: "低碳众筹", ar: "التمويل الجماعي منخفض الكربون" },
  "nav.cafe": { en: "Cafe", zh: "咖啡馆", ar: "المقهى" },
  "nav.b2b_pricing": { en: "B2B Dynamic Pricing", zh: "B2B动态定价", ar: "التسعير الديناميكي بين الشركات" },
  "nav.rwa_stablecoin": { en: "RWA & Stablecoin", zh: "RWA与稳定币", ar: "الأصول الحقيقية والعملة المستقرة" },
  "nav.about_us": { en: "About Us", zh: "关于我们", ar: "من نحن" },
  "nav.methodology": { en: "Carbon Methodology", zh: "碳核算方法论", ar: "منهجية الكربون" },
  "nav.join_platform": { en: "Join Platform", zh: "加入平台", ar: "انضم إلى المنصة" },
  "nav.contact": { en: "Contact Us", zh: "联系我们", ar: "اتصل بنا" },

  /* ---------- Nav Dropdown Triggers ---------- */
  "nav.industry_chain_trigger": { en: "Industry Chain", zh: "产业链", ar: "سلسلة الصناعة" },
  "nav.carbon_economy_trigger": { en: "Carbon Economy", zh: "碳经济", ar: "اقتصاد الكربون" },
  "nav.private_central_bank_trigger": { en: "Private Central Bank", zh: "私人央行", ar: "البنك المركزي الخاص" },
  "nav.about_trigger": { en: "About", zh: "关于", ar: "حول" },

  /* ---------- Badges ---------- */
  "badge.zero_soil": { en: "Zero Soil", zh: "零土壤", ar: "تربة صفرية" },
  "badge.skeleton": { en: "Skeleton", zh: "骨架", ar: "الهيكل" },
  "badge.crown": { en: "Crown", zh: "王冠", ar: "التاج" },

  /* ---------- Hero ---------- */
  "hero.badge": { en: "World's first aeroponic · Full-chain carbon neutral · Blockchain traceability", zh: "全球首创雾化水培 · 全链路碳中和 · 区块链溯源", ar: "أول زراعة هوائية في العالم · سلسلة كربون محايدة · تتبع البلوكتشين" },
  "hero.title_1": { en: "From Aeroponic Seeds", zh: "从雾培种子", ar: "من بذور الزراعة الهوائية" },
  "hero.title_2": { en: "to Carbon-Neutral Cup", zh: "到碳中和杯子", ar: "إلى فنجان محايد الكربون" },
  "hero.sub": { en: "The world's first low-carbon coffee industry platform covering the entire chain from seed to cup. Ten interconnected modules, three self-reinforcing flywheels — every cup has a carbon ledger.", zh: "全球首个覆盖"从种子到杯子"全链条的咖啡低碳产业互联网平台。十大模块环环双扣，三大飞轮自我强化——每一杯咖啡都有碳账本。", ar: "أول منصة صناعة قهوة منخفضة الكربون في العالم تغطي السلسلة الكاملة من البذرة إلى الفنجان. عشر وحدات مترابطة، ثلاث عجلات ذاتية التعزيز — كل فنجان له دفتر كربون." },
  "hero.cta_explore": { en: "Explore Ten Modules", zh: "探索十大模块", ar: "استكشف الوحدات العشر" },
  "hero.cta_dashboard": { en: "Carbon Data Dashboard", zh: "碳数据大屏", ar: "لوحة بيانات الكربون" },
  "hero.title_full": { en: "From Aeroponic Seeds to Carbon-Neutral Cup", zh: "从雾培种子到碳中和杯子", ar: "من بذور الزراعة الهوائية إلى فنجان محايد الكربون" },
  "hero.sub_cn": { en: "China's first low-carbon coffee industry internet platform covering the entire chain from seed to cup. Eight interconnected modules, three self-reinforcing flywheels — every cup of coffee has a carbon ledger.", zh: "中国首个覆盖"从种子到杯子"全链条的咖啡低碳产业互联网平台。八大模块环环双扣，三大飞轮自我强化——每一杯咖啡都有碳账本。", ar: "أول منصة إنترنت صناعة قهوة منخفضة الكربون في الصين تغطي السلسلة الكاملة من البذرة إلى الفنجان. ثماني وحدات مترابطة، ثلاث عجلات ذاتية التعزيز — كل فنجان قهوة له دفتر كربون." },

  /* ---------- KPI Labels (index) ---------- */
  "kpi.carbon_reduction": { en: "Cumulative Carbon Reduction (tCO₂e)", zh: "累计碳减排 (tCO₂e)", ar: "إجمالي تخفيض الكربون (tCO₂e)" },
  "kpi.registered_users": { en: "Platform Registered Users", zh: "平台注册用户", ar: "المستخدمون المسجلون" },
  "kpi.traded_coffee": { en: "Coffee Beans Traded (Tons)", zh: "已交易咖啡豆 (吨)", ar: "حبوب القهوة المتداولة (طن)" },
  "kpi.crowdfunding_total": { en: "Crowdfunding Total", zh: "众筹累计金额", ar: "إجمالي التمويل الجماعي" },

  /* ---------- KPI Trends ---------- */
  "kpi.trend.carbon": { en: "↑ 23% vs same period last year", zh: "↑ 23% vs 上年同期", ar: "↑ 23% مقارنة بالعام الماضي" },
  "kpi.trend.users": { en: "Covering 32 countries/regions", zh: "覆盖 32 个国家/地区", ar: "يغطي 32 دولة/منطقة" },
  "kpi.trend.traced": { en: "Blockchain traceability 100%", zh: "区块链溯源 100%", ar: "تتبع البلوكتشين 100%" },
  "kpi.trend.projects": { en: "Supporting 186 low-carbon projects", zh: "支持 186 个低碳项目", ar: "يدعم 186 مشروع منخفض الكربون" },

  /* ---------- Section Eyebrows ---------- */
  "eyebrow.full_chain": { en: "Full-Chain Visualization", zh: "全链路可视化", ar: "تصور السلسلة الكاملة" },
  "eyebrow.realtime": { en: "Real-Time Data", zh: "实时数据", ar: "بيانات في الوقت الفعلي" },
  "eyebrow.interlinked": { en: "Interconnected · Five Bonds", zh: "环环双扣 · 五条纽带", ar: "مترابطة · خمس روابط" },
  "eyebrow.flywheel": { en: "Self-Reinforcing Growth Engine", zh: "自我强化增长引擎", ar: "محرك نمو ذاتي التعزيز" },

  /* ---------- Section Headings ---------- */
  "section.carbon_journey": { en: "Carbon Footprint Journey", zh: "碳足迹旅程", ar: "رحلة البصمة الكربونية" },
  "section.dashboard": { en: "Carbon Data Dashboard", zh: "碳数据大屏", ar: "لوحة بيانات الكربون" },
  "section.modules": { en: "Ten Business Modules", zh: "十大业务模块", ar: "عشر وحدات الأعمال" },
  "section.flywheels": { en: "Three Flywheel Effects", zh: "三大飞轮效应", ar: "تأثيرات العجلات الثلاث" },
  "section.news": { en: "Latest Updates", zh: "最新动态", ar: "آخر التحديثات" },

  /* ---------- Buttons ---------- */
  "btn.refresh": { en: "Refresh Data", zh: "刷新数据", ar: "تحديث البيانات" },
  "btn.view_all": { en: "View All", zh: "查看全部", ar: "عرض الكل" },
  "btn.order": { en: "Order", zh: "下单", ar: "اطلب" },
  "btn.grab": { en: "Grab", zh: "抢购", ar: "احجز" },
  "btn.lock_price": { en: "Lock Price", zh: "锁价", ar: "قفل السعر" },

  /* ---------- Footer ---------- */
  "footer.brand_desc": { en: "The world's first low-carbon coffee industry platform covering the entire chain from seed to cup. Built on aeroponic hydroponic technology, creating a low-carbon ecosystem for the entire coffee industry chain.", zh: "全球首个覆盖"从种子到杯子"全链条的咖啡低碳产业互联网平台。以雾化水培技术为起点，构建咖啡全产业链低碳生态圈。", ar: "أول منصة صناعة قهوة منخفضة الكربون في العالم تغطي السلسلة الكاملة من البذرة إلى الفنجان. مبنية على تقنية الزراعة الهوائية، خلق نظام بيئي منخفض الكربون للسلسلة الصناعية الكاملة للقهوة." },
  "footer.industry_chain": { en: "Industry Chain", zh: "产业链", ar: "سلسلة الصناعة" },
  "footer.carbon_economy": { en: "Carbon Economy", zh: "碳经济", ar: "اقتصاد الكربون" },
  "footer.private_bank": { en: "Private Central Bank", zh: "私人央行", ar: "البنك المركزي الخاص" },
  "footer.about": { en: "About", zh: "关于", ar: "حول" },
  "footer.about_us": { en: "About Us", zh: "关于我们", ar: "من نحن" },
  "footer.methodology": { en: "Carbon Methodology", zh: "碳核算方法论", ar: "منهجية الكربون" },
  "footer.join": { en: "Join Platform", zh: "加入平台", ar: "انضم للمنصة" },
  "footer.contact": { en: "Contact Us", zh: "联系我们", ar: "اتصل بنا" },
  "footer.copyright": { en: "Every cup of coffee has a carbon ledger.", zh: "每一杯咖啡都有碳账本。", ar: "كل فنجان قهوة له دفتر كربون." },
  "footer.status": { en: "Platform Status: Normal", zh: "平台运行状态：正常", ar: "حالة المنصة: طبيعي" },

  /* ---------- Module Card Titles ---------- */
  "module.planting.title": { en: "Aeroponic Planting Chain", zh: "雾化水培种植链", ar: "سلسلة الزراعة الهوائية" },
  "module.planting.desc": { en: "World's first aeroponic coffee cultivation. Roots drink mist, grow without soil, saving 90%+ water, reducing carbon footprint 60%+", zh: "全球首创雾化水培咖啡种植。根系喝雾、无土生长，节水90%+，碳足迹降低60%+", ar: "أول زراعة قهوة هوائية في العالم. الجذور تشرب الضباب، تنمو بدون تربة، توفير المياه 90%+، تقليل البصمة الكربونية 60%+" },
  "module.processing.title": { en: "Low-Carbon Coffee Processing", zh: "低碳咖啡加工", ar: "معالجة القهوة منخفضة الكربون" },
  "module.processing.desc": { en: "Shared processing capacity, real-time energy monitoring, waste valorization. All-electric equipment reduces carbon 80%+", zh: "加工产能共享、能耗实时监测、废弃物资源化。全电动设备减碳80%+", ar: "سعة معالجة مشتركة، مراقبة الطاقة في الوقت الفعلي، تدوير النفايات. المعدات الكهربائية بالكامل تقلل الكربون 80%+" },
  "module.trade.title": { en: "Digital Coffee Trade", zh: "数字咖啡贸易", ar: "تجارة القهوة الرقمية" },
  "module.trade.desc": { en: "Global green bean supply-demand matching, blockchain traceability, smart contract settlement, carbon footprint visualized procurement", zh: "全球生豆供需撮合、区块链溯源、智能合约结算、碳足迹可视化采购", ar: "مطابقة العرض والطلب العالمي للبذور الخضراء، تتبع البلوكتشين، تسوية العقود الذكية، مشتريات بصرية البصمة الكربونية" },
  "module.roasting.title": { en: "Roasting Shared Space", zh: "烘焙共享空间", ar: "مساحة التحميص المشتركة" },
  "module.roasting.desc": { en: "Studio booking, equipment rental, roaster community, remote monitoring. Shared spaces reduce carbon footprint", zh: "工作室预约、设备租赁、烘焙师社区、远程监控。共享空间降低碳足迹", ar: "حجز الاستوديو، تأجير المعدات، مجتمع المحمصين، مراقبة عن بعد. المساحات المشتركة تقلل البصمة الكربونية" },
  "module.ip_trading.title": { en: "Roast Curve IP Trading", zh: "烘焙曲线IP交易", ar: "تداول منحنيات التحميص" },
  "module.ip_trading.desc": { en: "Curve upload & certification, copyright protection, carbon efficiency rating, smart recommendations, IP licensing revenue sharing", zh: "曲线上传存证、版权确权、碳效率评级、智能推荐、IP授权收益分成", ar: "رفع المنحنيات وإثبات الملكية، حماية حقوق النشر، تقييم كفاءة الكربون، توصيات ذكية، مشاركة إيرادات الترخيص" },
  "module.coffee_bank.title": { en: "Coffee Savings Bank", zh: "咖啡储蓄银行", ar: "بنك ادخار القهوة" },
  "module.coffee_bank.desc": { en: "Professional warehousing, digital warehouse receipt pledge financing, quality grading, storage carbon footprint accounting", zh: "专业仓储管理、数字仓单质押融资、品质检测分级、仓储碳足迹核算", ar: "تخزين احترافي، تمويل رهن المستندات الرقمية، تصنيف الجودة، حساب البصمة الكربونية للتخزين" },
  "module.crowdfunding.title": { en: "Low-Carbon Crowdfunding", zh: "低碳众筹平台", ar: "التمويل الجماعي منخفض الكربون" },
  "module.crowdfunding.desc": { en: "Grower project crowdfunding, carbon普惠 mechanism, transparent tracking, carbon credit rewards for supporters", zh: "种植户项目众筹、碳普惠机制、透明化追踪、碳积分奖励支持者", ar: "تمويل جماعي لمشاريع المزارعين، آلية الكربون الشامل، تتبع شفاف، مكافآت ائتمان الكربون للداعمين" },
  "module.cafe.title": { en: "Low-Carbon Cafe", zh: "低碳咖啡馆", ar: "مقهى منخفض الكربون" },
  "module.cafe.desc": { en: "Online mall, store alliance, carbon footprint visualization, bring-your-own-cup rewards, carbon-neutral store certification", zh: "线上商城、门店联盟、碳足迹可视化、自带杯奖励、碳中和门店认证", ar: "متجر إلكتروني، تحالف المتاجر، تصور البصمة الكربونية، مكافآت الكوب الشخصي، شهادة متجر محايد كربونيا" },
  "module.b2b.title": { en: "B2B Dynamic Pricing", zh: "B2B 动态定价", ar: "التسعير الديناميكي بين الشركات" },
  "module.b2b.desc": { en: "Production-leading-indicator driven smart pricing engine, zero-stock guarantee service, futures-spot matched hedging closed loop", zh: "产量领先指标驱动智能定价引擎，零库存保证服务，期现匹配套保闭环", ar: "محرك تسعير ذكي مدفوع بمؤشرات الإنتاج الرائدة، خدمة ضمان المخزون الصفري، حلقة تحوط مطابقة الآجل-النقدي" },
  "module.rwa.title": { en: "RWA & Stablecoin", zh: "RWA 与稳定币", ar: "الأصول الحقيقية والعملة المستقرة" },
  "module.rwa.desc": { en: "Coffee bean warehouse receipt token (CT) backed by physical, CT/USDC liquidity pool, JEBI stablecoin over-collateralized", zh: "咖啡豆仓单通证(CT)锚定实物，CT/USDC流动性池，JEBI稳定币超额抵押", ar: "رمز مستندات مستودع حبوب القهوة (CT) مدعوم بالأصول المادية، مجموعة سيولة CT/USDC، عملة JEBI المستقرة بضمان زائد" },

  /* ---------- Common UI ---------- */
  "common.live": { en: "LIVE", zh: "LIVE", ar: "مباشر" },
  "common.certified": { en: "Certified", zh: "已认证", ar: "معتمد" },
  "common.reviewing": { en: "Under Review", zh: "审核中", ar: "قيد المراجعة" },
  "common.in_progress": { en: "In Progress", zh: "履约中", ar: "قيد التنفيذ" },
  "common.completed": { en: "Completed", zh: "已完成", ar: "مكتمل" },
  "common.active": { en: "Active", zh: "履约中", ar: "نشط" },
  "common.platinum": { en: "Platinum", zh: "铂金", ar: "بلاتيني" },
  "common.gold": { en: "Gold", zh: "金", ar: "ذهبي" },
  "common.silver": { en: "Silver", zh: "银", ar: "فضي" },
  "common.bronze": { en: "Bronze", zh: "铜", ar: "برونزي" },

  /* ---------- Contact Page ---------- */
  "contact.title": { en: "Contact Us", zh: "联系我们", ar: "اتصل بنا" },
  "contact.desc": { en: "Get in touch with the JEBI HUB team", zh: "与 JEBI HUB 团队取得联系", ar: "تواصل مع فريق JEBI HUB" },
  "contact.whatsapp": { en: "WhatsApp", zh: "WhatsApp", ar: "واتساب" },
  "contact.wechat": { en: "WeChat", zh: "微信", ar: "وي تشات" },
  "contact.email": { en: "Email", zh: "邮箱", ar: "البريد الإلكتروني" },
  "contact.office": { en: "Office", zh: "办公信息", ar: "المكتب" },
  "contact.location": { en: "Hong Kong, China", zh: "中国香港", ar: "هونغ كونغ، الصين" },
  "contact.hours": { en: "Mon-Fri 9:00-18:00 HKT", zh: "周一至周五 9:00-18:00 HKT", ar: "الاثنين-الجمعة 9:00-18:00 بتوقيت هونغ كونغ" },
  "contact.faq": { en: "Frequently Asked Questions", zh: "常见问题", ar: "الأسئلة الشائعة" },

  /* ---------- About Page ---------- */
  "about.title": { en: "About JEBI HUB", zh: "关于我们", ar: "من نحن" },
  "about.desc": { en: "JEBI HUB is the world's first low-carbon coffee industry platform covering the entire chain from seed to cup, built on aeroponic hydroponic technology.", zh: "JEBI HUB 是全球首个覆盖"从种子到杯子"全链条的咖啡低碳产业互联网平台，以雾化水培技术为起点。", ar: "JEBI HUB هي أول منصة صناعة قهوة منخفضة الكربون في العالم تغطي السلسلة الكاملة من البذرة إلى الفنجان، مبنية على تقنية الزراعة الهوائية." },

  /* ---------- Methodology Page ---------- */
  "methodology.title": { en: "Carbon Accounting Methodology", zh: "碳核算方法论", ar: "منهجية حساب الكربون" },
  "methodology.desc": { en: "How JEBI HUB measures, verifies, and offsets carbon across the entire coffee supply chain", zh: "JEBI HUB 如何在整个咖啡供应链中计量、验证和抵消碳排放", ar: "كيف تقيس JEBI HUB وتتحقق وتعوض الكربون عبر سلسلة توريد القهوة بأكملها" },

  /* ---------- Join Platform Page ---------- */
  "join.title": { en: "Join the Platform", zh: "加入平台", ar: "انضم للمنصة" },
  "join.desc": { en: "Whether you're a grower, roaster, trader, or consumer — there's a role for you in the JEBI HUB ecosystem", zh: "无论您是种植户、烘焙师、贸易商还是消费者——JEBI HUB 生态中都有您的角色", ar: "سواء كنت مزارعاً أو محمصاً أو تاجراً أو مستهلكاً — هناك دور لك في نظام JEBI HUB البيئي" },

  /* ---------- B2B Page ---------- */
  "b2b.title": { en: "B2B Dynamic Pricing Platform", zh: "B2B 动态定价平台", ar: "منصة التسعير الديناميكي بين الشركات" },
  "b2b.subtitle": { en: "Trade & Supply Chain Skeleton", zh: "贸易与供应链的骨架", ar: "هيكل التجارة وسلسلة التوريد" },
  "b2b.desc": { en: "Leveraging 30% of global aeroponic coffee capacity, productizing 'supply chain as a service'. Real-time inventory, production forecasts, growth cycle data drive the smart pricing engine, guaranteeing 'supply certainty' to downstream clients, converting data advantage directly into stable cash flow and spot positions.", zh: "依托全球 30% 水培咖啡产能，将"供应链即服务"产品化。实时库存、产量预测、生长周期数据驱动智能定价引擎，向下游大客户承诺"供应确定性"，将数据优势直接转化为稳定现金流与现货头寸。", ar: "بالاعتماد على 30% من سعة الزراعة الهوائية العالمية للقهوة، تحويل "سلسلة التوريد كخدمة" إلى منتج. المخزون في الوقت الفعلي، توقعات الإنتاج، بيانات دورة النمو تدفع محرك التسعير الذكي، ضمان "يقين التوريد" للعملاء، تحويل ميزة البيانات إلى تدفق نقدي مستقر ومراكز نقدية." },

  /* ---------- RWA Page ---------- */
  "rwa.title": { en: "RWA & Stablecoin Platform", zh: "RWA 与稳定币平台", ar: "منصة الأصول الحقيقية والعملة المستقرة" },
  "rwa.subtitle": { en: "Data & Finance Crown", zh: "数据与金融的王冠", ar: "تاج البيانات والتمويل" },
  "rwa.desc": { en: "Tokenizing physical coffee capacity assets. Each Coffee Token (CT) is strictly backed by 1 kg of audited aeroponic coffee beans, redeemable for physical at any time. Building CT/USDC liquidity pools and exploring the coffee-backed stablecoin (JEBI) under licensed compliance frameworks.", zh: "将实体咖啡产能资产化、代币化。每一枚咖啡豆仓单通证（CT）严格锚定 1 公斤经审计的水培咖啡豆，可随时赎回实物。在合规持牌框架下，构建 CT/USDC 流动性池，并探索锚定美元的咖啡稳定币（JEBI）。合规先行，稳健推进。", ar: "تحويل أصول قدرة القهوة المادية إلى رموز رقمية. كل رمز قهوة (CT) مدعوم بـ 1 كجم من حبوب القهوة الهوائية المدققة، قابلة للاسترداد في أي وقت. بناء مجموعات سيولة CT/USDC واستكشاف عملة القهوة المستقرة (JEBI) ضمن أطر امتثال مرخصة." },

  /* ---------- Flywheel ---------- */
  "flywheel.quality.title": { en: "Quality Flywheel", zh: "品质飞轮", ar: "عجلة الجودة" },
  "flywheel.quality.desc": { en: "High-quality aeroponic beans drive full-chain quality improvement, market feedback feeds back to optimize planting.", zh: "雾培高品质豆驱动全链路品质提升，市场反馈反哺种植端优化方案。", ar: "الحبوب الهوائية عالية الجودة تدفع تحسين الجودة في السلسلة الكاملة، ردود الفعل السوقية تغذي تحسين الزراعة." },
  "flywheel.carbon.title": { en: "Carbon Value Flywheel", zh: "碳价值飞轮", ar: "عجلة قيمة الكربون" },
  "flywheel.carbon.desc": { en: "Low-carbon bean carbon labels span from planting to consumption, carbon credits flow back to fund aeroponic expansion.", zh: "低碳豆的碳标签从种植端贯穿到消费端，碳积分回流反哺雾培扩建。", ar: "ملصقات الكربون للحبوب منخفضة الكربون تمتد من الزراعة إلى الاستهلاك، ائتمانات الكربون تتدفق لتمويل توسيع الزراعة الهوائية." },
  "flywheel.data.title": { en: "Data Flywheel", zh: "数据飞轮", ar: "عجلة البيانات" },
  "flywheel.data.desc": { en: "Consumer taste data drives IP curve optimization and roasting adjustments, ultimately feeding back to planting.", zh: "消费端口味数据驱动IP曲线优化和烘焙方案调整，最终反哺种植端。", ar: "بيانات تذوق المستهلكين تدفع تحسين منحنيات الملكية الفكرية وتعديلات التحميص، وتعود لتحسين الزراعة." },

  /* ---------- News ---------- */
  "news.tag.tech": { en: "Tech Breakthrough", zh: "技术突破", ar: "اختراق تقني" },
  "news.tag.carbon": { en: "Carbon Trading", zh: "碳交易", ar: "تداول الكربون" },
  "news.tag.biz": { en: "Industry Partnership", zh: "产业合作", ar: "شراكة صناعية" },

  /* ---------- Language Switcher ---------- */
  "lang.switcher": { en: "Language", zh: "语言", ar: "اللغة" },
  "lang.en": { en: "English", zh: "English", ar: "English" },
  "lang.zh": { en: "Mandarin", zh: "中文", ar: "中文" },
  "lang.ar": { en: "Arabic", zh: "العربية", ar: "العربية" }
};

/* ============================================================
   i18n Engine — apply translations + language switcher
   ============================================================ */

function getLang() {
  return localStorage.getItem('jebi-lang') || 'zh';
}

function setLang(lang) {
  localStorage.setItem('jebi-lang', lang);
  applyI18n(lang);
  // Update switcher display
  document.querySelectorAll('.lang-current').forEach(el => {
    el.textContent = lang.toUpperCase();
  });
  document.querySelectorAll('.lang-option').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });
}

function translate(key, lang) {
  if (I18N[key] && I18N[key][lang]) {
    return I18N[key][lang];
  }
  return null;
}

function applyI18n(lang) {
  // 1. Update data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translated = translate(key, lang);
    if (translated) {
      el.textContent = translated;
    }
  });

  // 2. Update data-i18n-placeholder elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translated = translate(key, lang);
    if (translated) {
      el.setAttribute('placeholder', translated);
    }
  });

  // 3. Update data-i18n-title elements
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const translated = translate(key, lang);
    if (translated) {
      el.setAttribute('title', translated);
    }
  });

  // 4. Update document direction and lang
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // 5. Dictionary-based text replacement for elements without data-i18n
  // Build a reverse map: for each Chinese text, find if it matches a key
  if (lang !== 'zh') {
    const textMap = {};
    for (const [key, vals] of Object.entries(I18N)) {
      if (vals.zh && vals[lang]) {
        textMap[vals.zh] = vals[lang];
      }
    }
    // Walk text nodes
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, null);
    const nodes = [];
    let node;
    while (node = walker.nextNode()) {
      const text = node.textContent.trim();
      if (text && textMap[text]) {
        nodes.push({ node, replacement: textMap[text] });
      }
    }
    nodes.forEach(({ node, replacement }) => {
      // Preserve leading/trailing whitespace
      const lead = node.textContent.match(/^\s*/)[0];
      const trail = node.textContent.match(/\s*$/)[0];
      node.textContent = lead + replacement + trail;
    });
  } else {
    // For zh, restore from data-i18n-original if stored
    document.querySelectorAll('[data-i18n-original]').forEach(el => {
      el.textContent = el.getAttribute('data-i18n-original');
    });
  }

  // 6. Re-trigger counter animations (since text may have changed)
  if (typeof animateCounters === 'function' && lang !== 'zh') {
    // Don't re-animate, just update labels
  }
}

function initLangSwitcher() {
  const switchers = document.querySelectorAll('.lang-switcher');
  switchers.forEach(switcher => {
    const btn = switcher.querySelector('.lang-switcher-btn');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        switcher.classList.toggle('open');
      });
    }
    document.addEventListener('click', () => {
      switcher.classList.remove('open');
    });
    switcher.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = opt.dataset.lang;
        setLang(lang);
        switcher.classList.remove('open');
      });
    });
  });

  // Check if first visit (no language preference set)
  const hasLang = localStorage.getItem('jebi-lang');
  if (!hasLang) {
    // Show language selection modal on first visit
    initLangModal();
  } else {
    // Apply saved language
    const lang = getLang();
    applyI18n(lang);
  }

  // Always update switcher display
  const lang = getLang();
  document.querySelectorAll('.lang-current').forEach(el => {
    el.textContent = lang.toUpperCase();
  });
  document.querySelectorAll('.lang-option').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });
}

/* ---------- Language Selection Modal ---------- */
function initLangModal() {
  const modal = document.getElementById('langModal');
  if (!modal) return;

  // Show modal with slight delay for smooth entrance
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      modal.classList.add('active');
    });
  });

  // Option click handlers
  modal.querySelectorAll('.lang-modal-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.dataset.lang;
      setLang(lang);
      closeModal(modal);
    });
  });

  // Skip button — use default (zh) and close
  const skipBtn = document.getElementById('langModalSkip');
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      setLang('zh');
      closeModal(modal);
    });
  }
}

function closeModal(modal) {
  modal.classList.remove('active');
  // Remove from DOM after transition
  setTimeout(() => { modal.style.display = 'none'; }, 400);
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initLangSwitcher();
});

// Export for manual use
window.JEBI_I18N = { getLang, setLang, applyI18n, initLangSwitcher };
