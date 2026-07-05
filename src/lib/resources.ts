export type ResourceArticle = {
  slug: string;
  category: { en: string; bn: string };
  title: { en: string; bn: string };
  description: { en: string; bn: string };
  readingMinutes: number;
  keywords: string[];
  intro: { en: string; bn: string };
  sections: {
    heading: { en: string; bn: string };
    body: { en: string; bn: string };
    items?: { en: string; bn: string }[];
  }[];
  closing?: { en: string; bn: string };
  related: string[];
};

export const resources: ResourceArticle[] = [
  {
    slug: "signs-of-addiction",
    category: { en: "Awareness", bn: "সচেতনতা" },
    title: { en: "Signs of Addiction", bn: "আসক্তির লক্ষণ" },
    description: {
      en: "Behavioral, physical, and psychological red flags to watch for.",
      bn: "লক্ষ্য রাখার মতো আচরণগত, শারীরিক ও মানসিক সতর্কীকরণ চিহ্ন।",
    },
    readingMinutes: 5,
    keywords: ["addiction signs", "warning signs", "dependence", "symptoms", "recognition", "awareness", "নেশা", "লক্ষণ"],
    intro: {
      en: "Addiction rarely appears overnight — it develops gradually, often hiding behind everyday explanations. Recognizing the early signs, across physical, behavioral, and emotional categories, is the first step toward getting help before a crisis develops.",
      bn: "আসক্তি সাধারণত রাতারাতি দেখা দেয় না — এটি ধীরে ধীরে গড়ে ওঠে এবং প্রায়ই সাধারণ ব্যাখ্যার আড়ালে লুকিয়ে থাকে। শারীরিক, আচরণগত ও মানসিক দিক থেকে প্রাথমিক লক্ষণগুলো চিনতে পারা সংকট তৈরি হওয়ার আগেই সাহায্য পাওয়ার প্রথম ধাপ।",
    },
    sections: [
      {
        heading: { en: "Physical Signs", bn: "শারীরিক লক্ষণ" },
        body: { en: "", bn: "" },
        items: [
          { en: "Bloodshot eyes, dilated or pinpoint pupils", bn: "চোখ লাল হয়ে যাওয়া, চোখের মণি প্রসারিত বা সংকুচিত হওয়া" },
          { en: "Sudden weight changes or appetite shifts", bn: "হঠাৎ ওজন পরিবর্তন বা ক্ষুধার পরিবর্তন" },
          { en: "Poor hygiene and neglected appearance", bn: "শরীরের পরিচ্ছন্নতার অভাব ও অবহেলিত চেহারা" },
          { en: "Tremors, slurred speech, or impaired coordination", bn: "কম্পন, অস্পষ্ট কথা বলা, বা সমন্বয়ে সমস্যা" },
          { en: "Unusual sleep patterns or chronic fatigue", bn: "অস্বাভাবিক ঘুমের ধরন বা দীর্ঘস্থায়ী ক্লান্তি" },
        ],
      },
      {
        heading: { en: "Behavioral Signs", bn: "আচরণগত লক্ষণ" },
        body: { en: "", bn: "" },
        items: [
          { en: "Secrecy about whereabouts or activities", bn: "নিজের অবস্থান বা কার্যকলাপ নিয়ে গোপনীয়তা" },
          { en: "Withdrawal from family, friends, and hobbies", bn: "পরিবার, বন্ধুবান্ধব ও শখ থেকে দূরে সরে যাওয়া" },
          { en: "Neglecting responsibilities at work, school, or home", bn: "কাজ, স্কুল বা বাড়ির দায়িত্ব অবহেলা করা" },
          { en: "Financial troubles or unexplained borrowing", bn: "আর্থিক সমস্যা বা ব্যাখ্যাতীত ঋণ নেওয়া" },
          { en: "Risk-taking behavior and legal problems", bn: "ঝুঁকিপূর্ণ আচরণ ও আইনি সমস্যা" },
        ],
      },
      {
        heading: { en: "Psychological Signs", bn: "মানসিক লক্ষণ" },
        body: { en: "", bn: "" },
        items: [
          { en: "Sudden mood swings or irritability", bn: "হঠাৎ মেজাজ পরিবর্তন বা খিটখিটে ভাব" },
          { en: "Increased anxiety, paranoia, or defensiveness", bn: "উদ্বেগ, সন্দেহপ্রবণতা বা আত্মরক্ষামূলক মনোভাব বৃদ্ধি" },
          { en: "Loss of motivation or interest in the future", bn: "ভবিষ্যতের প্রতি আগ্রহ বা অনুপ্রেরণা হারানো" },
          { en: "Denial when confronted about substance use", bn: "মাদক ব্যবহার নিয়ে প্রশ্ন করলে অস্বীকার করা" },
          { en: "Using substances to cope with stress or emotion", bn: "মানসিক চাপ বা আবেগ মোকাবেলায় মাদক ব্যবহার করা" },
        ],
      },
      {
        heading: { en: "Signs of Dependence", bn: "নির্ভরতার লক্ষণ" },
        body: { en: "", bn: "" },
        items: [
          { en: "Needing more of a substance for the same effect", bn: "একই প্রভাবের জন্য বেশি পরিমাণ মাদকের প্রয়োজন হওয়া" },
          { en: "Withdrawal symptoms when not using", bn: "ব্যবহার না করলে প্রত্যাহার লক্ষণ দেখা দেওয়া" },
          { en: "Repeated, unsuccessful attempts to cut back", bn: "কমানোর বারবার ব্যর্থ চেষ্টা" },
          { en: "Continued use despite clear negative consequences", bn: "স্পষ্ট ক্ষতিকর পরিণতি সত্ত্বেও ব্যবহার চালিয়ে যাওয়া" },
          { en: "Cravings that interfere with daily thinking", bn: "তীব্র আকাঙ্ক্ষা যা দৈনন্দিন চিন্তাভাবনায় বাধা দেয়" },
        ],
      },
    ],
    closing: {
      en: "Not every sign means addiction, and not every person shows the same signs. What matters most is a pattern — several signs appearing together, worsening over time, and interfering with daily life.",
      bn: "প্রতিটি লক্ষণ আসক্তি বোঝায় না, এবং প্রত্যেক ব্যক্তির মধ্যে একই লক্ষণ দেখা যায় না। সবচেয়ে গুরুত্বপূর্ণ হলো একটি ধরন — একাধিক লক্ষণ একসাথে দেখা দেওয়া, সময়ের সাথে খারাপ হওয়া এবং দৈনন্দিন জীবনে বাধা সৃষ্টি করা।",
    },
    related: ["how-families-can-help", "understanding-treatment"],
  },
  {
    slug: "how-families-can-help",
    category: { en: "Family", bn: "পরিবার" },
    title: { en: "How Families Can Help", bn: "পরিবার কীভাবে সাহায্য করতে পারে" },
    description: {
      en: "Practical, loving ways to support a person without enabling.",
      bn: "প্রশয় না দিয়ে একজনকে সহায়তা করার বাস্তবসম্মত ও স্নেহপূর্ণ উপায়।",
    },
    readingMinutes: 6,
    keywords: ["family support", "help loved one", "boundaries", "enabling", "compassion", "পরিবার", "সহায়তা"],
    intro: {
      en: "Families are often a person's greatest source of strength in recovery — but supporting a loved one with addiction is a delicate balance between compassion and boundaries. Here's how to help in ways that truly make a difference.",
      bn: "পুনরুদ্ধারে পরিবার প্রায়শই একজন ব্যক্তির সবচেয়ে বড় শক্তির উৎস — কিন্তু আসক্ত প্রিয়জনকে সহায়তা করা সহানুভূতি ও সীমারেখার মধ্যে একটি সূক্ষ্ম ভারসাম্য। প্রকৃতপক্ষে পার্থক্য গড়ে তোলে এমন কিছু উপায় এখানে দেওয়া হলো।",
    },
    sections: [
      { heading: { en: "1. Educate yourself first", bn: "১. নিজেকে প্রথমে শিক্ষিত করুন" }, body: { en: "Learn how addiction affects the brain and behavior. Understanding it as a medical condition — not a choice — reduces blame and builds empathy on both sides.", bn: "আসক্তি মস্তিষ্ক ও আচরণকে কীভাবে প্রভাবিত করে তা জানুন। এটিকে পছন্দ নয়, বরং একটি চিকিৎসাগত অবস্থা হিসেবে বোঝা উভয় পক্ষের দোষারোপ কমায় ও সহানুভূতি তৈরি করে।" } },
      { heading: { en: "2. Communicate with compassion, not judgment", bn: "২. বিচার নয়, সহানুভূতির সাথে যোগাযোগ করুন" }, body: { en: "Use \"I\" statements, avoid lectures or ultimatums in anger, and choose calm moments to talk. Listening often opens more doors than advice.", bn: "\"আমি\" দিয়ে শুরু হওয়া বাক্য ব্যবহার করুন, রাগের মাথায় উপদেশ বা চরমপত্র এড়িয়ে চলুন, এবং শান্ত মুহূর্তে কথা বলুন। উপদেশের চেয়ে মনোযোগ দিয়ে শোনা প্রায়ই বেশি কার্যকর।" } },
      { heading: { en: "3. Set healthy boundaries", bn: "৩. সুস্থ সীমারেখা নির্ধারণ করুন" }, body: { en: "Love does not mean tolerating harmful behavior. Boundaries — such as not providing money that could fund substance use — protect both the family and the individual.", bn: "ভালোবাসা মানে ক্ষতিকর আচরণ সহ্য করা নয়। সীমারেখা — যেমন মাদক ব্যবহারে ব্যবহৃত হতে পারে এমন অর্থ না দেওয়া — পরিবার এবং ব্যক্তি উভয়কেই রক্ষা করে।" } },
      { heading: { en: "4. Avoid enabling", bn: "৪. প্রশ্রয় দেওয়া এড়িয়ে চলুন" }, body: { en: "Covering up consequences, making excuses, or repeatedly rescuing a loved one can unintentionally allow the addiction to continue. Support the person, not the addiction.", bn: "পরিণতি লুকিয়ে রাখা, অজুহাত দেওয়া, বা বারবার প্রিয়জনকে উদ্ধার করা অজান্তেই আসক্তিকে চলতে দিতে পারে। ব্যক্তিকে সমর্থন করুন, আসক্তিকে নয়।" } },
      { heading: { en: "5. Encourage — don't force — treatment", bn: "৫. চিকিৎসার জন্য উৎসাহিত করুন, জোর করবেন না" }, body: { en: "Share information calmly and consistently. Offer to help find a program, attend an appointment, or make a call, while respecting that the decision to accept help is theirs.", bn: "শান্তভাবে ও ধারাবাহিকভাবে তথ্য শেয়ার করুন। কর্মসূচি খুঁজে পেতে, অ্যাপয়েন্টমেন্টে যোগ দিতে বা ফোন করতে সাহায্যের প্রস্তাব দিন, তবে মনে রাখবেন সাহায্য গ্রহণের সিদ্ধান্ত তাদের নিজস্ব।" } },
      { heading: { en: "6. Take care of yourself too", bn: "৬. নিজেরও যত্ন নিন" }, body: { en: "Family support groups, counseling, and self-care aren't optional extras — they help caregivers stay strong, patient, and present for the long road ahead.", bn: "পারিবারিক সহায়তা গোষ্ঠী, কাউন্সেলিং এবং নিজের যত্ন নেওয়া ঐচ্ছিক নয় — এগুলো যত্নশীলদের দীর্ঘ পথের জন্য শক্তিশালী, ধৈর্যশীল ও উপস্থিত থাকতে সাহায্য করে।" } },
    ],
    closing: {
      en: "Supporting a loved one through addiction is a marathon, not a sprint. Small, consistent acts of steady love matter more than any single conversation.",
      bn: "আসক্তির মধ্য দিয়ে প্রিয়জনকে সহায়তা করা একটি ম্যারাথন, স্প্রিন্ট নয়। ছোট, ধারাবাহিক ও স্থির ভালোবাসার কাজ যেকোনো একক কথোপকথনের চেয়ে বেশি গুরুত্বপূর্ণ।",
    },
    related: ["recovery-support", "intervention-guidance"],
  },
  {
    slug: "recovery-support",
    category: { en: "Recovery", bn: "পুনরুদ্ধার" },
    title: { en: "Recovery Support", bn: "পুনরুদ্ধার সহায়তা" },
    description: {
      en: "The people, programs, and habits that sustain long-term recovery.",
      bn: "দীর্ঘমেয়াদী পুনরুদ্ধার টিকিয়ে রাখা মানুষ, কর্মসূচি ও অভ্যাস।",
    },
    readingMinutes: 5,
    keywords: ["recovery", "aftercare", "peer support", "sober living", "relapse prevention", "পুনরুদ্ধার"],
    intro: {
      en: "Recovery doesn't end when treatment does — it's an ongoing process built on community, structure, and continued care. A strong support system dramatically improves the chances of lasting recovery.",
      bn: "চিকিৎসা শেষ হলেই পুনরুদ্ধার শেষ হয় না — এটি সম্প্রদায়, কাঠামো এবং ধারাবাহিক যত্নের উপর নির্মিত একটি চলমান প্রক্রিয়া। একটি শক্তিশালী সহায়তা ব্যবস্থা দীর্ঘস্থায়ী পুনরুদ্ধারের সম্ভাবনা উল্লেখযোগ্যভাবে বাড়িয়ে দেয়।",
    },
    sections: [
      { heading: { en: "Peer Support Groups", bn: "সমবয়সী সহায়তা গোষ্ঠী" }, body: { en: "Programs such as 12-step groups or SMART Recovery meetings connect individuals with others who understand the journey firsthand, reducing isolation and shame.", bn: "১২-ধাপ গোষ্ঠী বা স্মার্ট রিকভারি সভার মতো কর্মসূচি ব্যক্তিদের এমন মানুষের সাথে যুক্ত করে যারা প্রত্যক্ষভাবে এই যাত্রা বোঝেন, যা বিচ্ছিন্নতা ও লজ্জা কমায়।" } },
      { heading: { en: "Individual & Group Counseling", bn: "ব্যক্তিগত ও গোষ্ঠী কাউন্সেলিং" }, body: { en: "Ongoing therapy helps process underlying triggers, build coping skills, and adjust to life changes as recovery progresses.", bn: "চলমান থেরাপি অন্তর্নিহিত ট্রিগারগুলো মোকাবেলা করতে, মোকাবিলার দক্ষতা গড়ে তুলতে এবং পুনরুদ্ধার এগিয়ে যাওয়ার সাথে সাথে জীবনের পরিবর্তনের সাথে মানিয়ে নিতে সাহায্য করে।" } },
      { heading: { en: "Sober Living Communities", bn: "সংযত জীবনযাপন সম্প্রদায়" }, body: { en: "Structured, substance-free housing environments offer accountability and gradual reintegration into independent life.", bn: "কাঠামাবদ্ধ, মাদকযুক্ত আবাসিক পরিবেশ জবাবদিহিতা এবং স্বাধীন জীবনে ধীরে ধীরে পুনরায় একীভূত হওয়ার সুযোগ দেয়।" } },
      { heading: { en: "Aftercare Planning", bn: "পরবর্তী যত্ন পরিকল্পনা" }, body: { en: "A personalized relapse-prevention plan — covering triggers, coping strategies, and emergency contacts — keeps recovery on track after formal treatment ends.", bn: "একটি ব্যক্তিগতকৃত পুনরাবৃত্তি-প্রতিরোধ পরিকল্পনা — যাতে ট্রিগার, মোকাবিলার কৌশল ও জরুরি যোগাযোগ অন্তর্ভুক্ত থাকে — আনুষ্ঠানিক চিকিৎসা শেষ হওয়ার পরেও পুনরুদ্ধারকে সঠিক পথে রাখে।" } },
      { heading: { en: "Family & Peer Check-Ins", bn: "পরিবার ও সমবয়সীদের সাথে যোগাযোগ" }, body: { en: "Regular, supportive contact with trusted family members or a recovery sponsor reinforces accountability without pressure.", bn: "বিশ্বস্ত পরিবারের সদস্য বা পুনরুদ্ধার পৃষ্ঠপোষকের সাথে নিয়মিত, সহায়ক যোগাযোগ চাপ ছাড়াই জবাবদিহিতা মজবুত করে।" } },
      { heading: { en: "Healthy Routines", bn: "সুস্থ দৈনন্দিন রুটিন" }, body: { en: "Exercise, nutrition, sleep, and purposeful daily structure all support the brain's healing process and reduce relapse risk.", bn: "ব্যায়াম, পুষ্টি, ঘুম এবং উদ্দেশ্যপূর্ণ দৈনন্দিন কাঠামো সবই মস্তিষ্কের নিরাময় প্রক্রিয়াকে সমর্থন করে এবং পুনরাবৃত্তির ঝুঁকি কমায়।" } },
    ],
    closing: {
      en: "Recovery is built one day at a time, supported by community. No one has to walk this path alone — and no one should have to.",
      bn: "পুনরুদ্ধার একদিনে একদিন করে গড়ে ওঠে, সম্প্রদায়ের সহায়তায়। কাউকে এই পথ একা হাঁটতে হয় না — এবং কারো তা করা উচিতও নয়।",
    },
    related: ["mental-wellness", "understanding-treatment"],
  },
  {
    slug: "intervention-guidance",
    category: { en: "Guidance", bn: "নির্দেশনা" },
    title: { en: "Intervention Guidance", bn: "হস্তক্ষেপ নির্দেশিকা" },
    description: {
      en: "How to plan and hold a safe, effective, and caring intervention.",
      bn: "নিরাপদ, কার্যকর ও যত্নশীল হস্তক্ষেপ পরিকল্পনা ও পরিচালনার উপায়।",
    },
    readingMinutes: 6,
    keywords: ["intervention", "confront", "plan intervention", "professional interventionist", "হস্তক্ষেপ"],
    intro: {
      en: "An intervention is a carefully planned conversation designed to help a loved one recognize the impact of their addiction and accept help. Done well, it comes from love — not confrontation.",
      bn: "হস্তক্ষেপ হলো একটি সতর্কতার সাথে পরিকল্পিত কথোপকথন, যা প্রিয়জনকে তাদের আসক্তির প্রভাব বুঝতে ও সাহায্য গ্রহণ করতে সাহায্য করার জন্য তৈরি। সঠিকভাবে করা হলে, এটি ভালোবাসা থেকে আসে — সংঘাত থেকে নয়।",
    },
    sections: [
      { heading: { en: "1. Plan with a professional", bn: "১. একজন পেশাদারের সাথে পরিকল্পনা করুন" }, body: { en: "A licensed interventionist or counselor can guide the process, anticipate reactions, and keep the conversation safe and productive.", bn: "একজন লাইসেন্সপ্রাপ্ত হস্তক্ষেপকারী বা কাউন্সেলর প্রক্রিয়াটি পরিচালনা করতে, প্রতিক্রিয়া অনুমান করতে এবং কথোপকথনকে নিরাপদ ও ফলপ্রসূ রাখতে সাহায্য করতে পারেন।" } },
      { heading: { en: "2. Choose the right people", bn: "২. সঠিক মানুষদের বেছে নিন" }, body: { en: "Include close family and friends who are directly affected and can speak calmly — avoid anyone likely to escalate conflict.", bn: "যারা সরাসরি প্রভাবিত এবং শান্তভাবে কথা বলতে পারেন এমন ঘনিষ্ঠ পরিবার ও বন্ধুদের অন্তর্ভুক্ত করুন — যারা দ্বন্দ্ব বাড়িয়ে দিতে পারে তাদের এড়িয়ে চলুন।" } },
      { heading: { en: "3. Prepare specific, caring statements", bn: "৩. নির্দিষ্ট, যত্নশীল বক্তব্য প্রস্তুত করুন" }, body: { en: "Each participant shares specific examples of how the addiction has affected them, using compassion rather than blame or shame.", bn: "প্রতিটি অংশগ্রহণকারী দোষারোপ বা লজ্জা না দিয়ে সহানুভূতির সাথে আসক্তি তাদের কীভাবে প্রভাবিত করেছে তার নির্দিষ্ট উদাহরণ শেয়ার করেন।" } },
      { heading: { en: "4. Have a treatment plan ready", bn: "৪. চিকিৎসা পরিকল্পনা প্রস্তুত রাখুন" }, body: { en: "Arrange a treatment program in advance so that if your loved one agrees to help, they can begin immediately — momentum matters.", bn: "আগে থেকেই একটি চিকিৎসা কর্মসূচি সাজিয়ে রাখুন যাতে প্রিয়জন সাহায্যে রাজি হলে তারা অবিলম্বে শুরু করতে পারেন — গতি গুরুত্বপূর্ণ।" } },
      { heading: { en: "5. Set clear, loving boundaries", bn: "৫. স্পষ্ট, স্নেহপূর্ণ সীমারেখা নির্ধারণ করুন" }, body: { en: "Decide beforehand what each person will do if their loved one declines help, and communicate these boundaries calmly and consistently.", bn: "প্রিয়জন সাহায্য প্রত্যাখ্যান করলে প্রত্যেকে তা আগে থেকেই ঠিক করে রাখুন, এবং এই সীমারেখাগুলো শান্তভাবে ও ধারাবাহিকভাবে জানিয়ে দিন।" } },
      { heading: { en: "6. Stay calm no matter the outcome", bn: "৬. ফলাফল যাই হোক শান্ত থাকুন" }, body: { en: "Not every intervention leads to immediate acceptance. Planting the seed with love, without ultimatums delivered in anger, often matters more over time.", bn: "প্রতিটি হস্তক্ষেপ তাৎক্ষণিক গ্রহণযোগ্যতার দিকে নিয়ে যায় না। রাগের সাথে চরমপত্র না দিয়ে ভালোবাসার সাথে বীজ বপন করা প্রায়ই সময়ের সাথে বেশি গুরুত্বপূর্ণ হয়ে ওঠে।" } },
      { heading: { en: "Before You Begin", bn: "শুরু করার আগে" }, body: { en: "Interventions can bring up strong emotions and unpredictable reactions. We strongly recommend working with a trained professional to plan and facilitate the conversation — our team is here to help you prepare.", bn: "হস্তক্ষেপ তীব্র আবেগ এবং অপ্রত্যাশিত প্রতিক্রিয়া নিয়ে আসতে পারে। কথোপকথন পরিকল্পনা ও পরিচালনার জন্য একজন প্রশিক্ষিত পেশাদারের সাথে কাজ করার জোরালো পরামর্শ দিই — আপনাকে প্রস্তুত হতে সাহায্য করতে আমাদের দল এখানে আছে।" } },
    ],
    related: ["how-families-can-help", "understanding-treatment"],
  },
  {
    slug: "understanding-treatment",
    category: { en: "Treatment", bn: "চিকিৎসা" },
    title: { en: "Understanding Treatment", bn: "চিকিৎসা বোঝা" },
    description: {
      en: "Levels of care, therapies, and what a treatment journey looks like.",
      bn: "সেবার স্তর, থেরাপি এবং চিকিৎসার যাত্রা কেমন হয়।",
    },
    readingMinutes: 6,
    keywords: ["treatment", "detox", "rehab", "inpatient", "outpatient", "therapy", "medication", "চিকিৎসা"],
    intro: {
      en: "Effective treatment is rarely one-size-fits-all. It's tailored to the individual's substance, history, and needs, and typically progresses through several levels of care.",
      bn: "কার্যকর চিকিৎসা খুব কমই সবার জন্য একরকম হয়। এটি ব্যক্তির মাদক ব্যবহারের ধরন, ইতিহাস ও প্রয়োজন অনুযায়ী তৈরি করা হয়, এবং সাধারণত সেবার বিভিন্ন স্তরের মধ্য দিয়ে এগিয়ে যায়।",
    },
    sections: [
      { heading: { en: "Medical Detox", bn: "চিকিৎসাগত ডিটক্স" }, body: { en: "Supervised withdrawal management ensures safety and comfort as the body clears substances, often the first step for physical dependence.", bn: "তত্ত্বাবধানে প্রত্যাহার ব্যবস্থাপনা শরীর মাদক পরিষ্কার করার সময় নিরাপত্তা ও স্বাচ্ছন্দ্য নিশ্চিত করে, যা প্রায়ই শারীরিক নির্ভরতার প্রথম ধাপ।" } },
      { heading: { en: "Inpatient / Residential Care", bn: "ইনপেশেন্ট / আবাসিক যত্ন" }, body: { en: "24/7 structured care in a live-in setting, ideal for those needing an immersive, distraction-free environment to begin recovery.", bn: "একটি আবাসিক পরিবেশে ২৪/৭ কাঠামাবদ্ধ যত্ন, যারা পুনরুদ্ধার শুরু করতে একটি নিমগ্ন, বিভ্রান্তিমুক্ত পরিবেশ চান তাদের জন্য আদর্শ।" } },
      { heading: { en: "Outpatient Programs", bn: "আউটপেশেন্ট কর্মসূচি" }, body: { en: "Flexible therapy and support while living at home — a strong option for milder cases or as a step-down after residential care.", bn: "বাড়িতে থাকাকালীন নমনীয় থেরাপি ও সহায়তা — মৃদু ক্ষেত্রে বা আবাসিক যত্নের পরে পরবর্তী ধাপ হিসেবে একটি শক্তিশালী বিকল্প।" } },
      { heading: { en: "Behavioral Therapies", bn: "আচরণগত থেরাপি" }, body: { en: "Approaches such as cognitive behavioral therapy (CBT) and motivational interviewing help identify triggers and build healthier coping patterns.", bn: "কগনিটিভ বিহেভিয়ারাল থেরাপি (সিবিটি) ও মোটিভেশনাল ইন্টারভিউয়িংয়ের মতো পদ্ধতি ট্রিগার শনাক্ত করতে এবং স্বাস্থ্যকর মোকাবিলা কৌশল গড়ে তুলতে সাহায্য করে।" } },
      { heading: { en: "Medication-Assisted Treatment", bn: "ওষুধ-সহায়ক চিকিৎসা" }, body: { en: "FDA-approved medications, combined with counseling, can ease cravings and withdrawal for certain substance use disorders.", bn: "এফডিএ-অনুমোদিত ওষুধ, কাউন্সেলিংয়ের সাথে মিলিয়ে, নির্দিষ্ট কিছু মাদক ব্যবহারজনিত সমস্যার ক্ষেত্রে আকাঙ্ক্ষা ও প্রত্যাহার লক্ষণ কমাতে পারে।" } },
      { heading: { en: "Aftercare & Continuing Care", bn: "পরবর্তী ও চলমান যত্ন" }, body: { en: "Ongoing therapy, support groups, and check-ins that extend the benefits of treatment well beyond the initial program.", bn: "চলমান থেরাপি, সহায়তা গোষ্ঠী এবং নিয়মিত যোগাযোগ যা চিকিৎসার উপকারিতা প্রাথমিক কর্মসূচির অনেক পরেও বজায় রাখে।" } },
    ],
    closing: {
      en: "Treatment is a process, not a single event. The right level of care can change over time — and that's a normal, healthy part of recovery, not a setback.",
      bn: "চিকিৎসা একটি প্রক্রিয়া, একটি একক ঘটনা নয়। সঠিক স্তরের যত্ন সময়ের সাথে পরিবর্তিত হতে পারে — এবং এটি পুনরুদ্ধারের একটি স্বাভাবিক, সুস্থ অংশ, কোনো বিপত্তি নয়।",
    },
    related: ["recovery-support", "mental-wellness"],
  },
  {
    slug: "mental-wellness",
    category: { en: "Wellness", bn: "সুস্থতা" },
    title: { en: "Mental Wellness", bn: "মানসিক সুস্থতা" },
    description: {
      en: "Caring for the mind alongside the body throughout recovery.",
      bn: "পুনরুদ্ধারের পুরো সময় দেহের পাশাপাশি মনের যত্ন নেওয়া।",
    },
    readingMinutes: 5,
    keywords: ["mental health", "anxiety", "depression", "trauma", "mindfulness", "dual diagnosis", "মানসিক স্বাস্থ্য"],
    intro: {
      en: "Addiction and mental health are deeply connected. Many individuals face co-occurring conditions such as anxiety, depression, or trauma, and lasting recovery means caring for the mind alongside the body.",
      bn: "আসক্তি ও মানসিক স্বাস্থ্য গভীরভাবে সম্পর্কিত। অনেক ব্যক্তি উদ্বেগ, বিষণ্নতা বা মানসিক আঘাতের মতো সহ-বিদ্যমান অবস্থার সম্মুখীন হন, এবং দীর্ঘস্থায়ী পুনরুদ্ধার মানে দেহের পাশাপাশি মনেরও যত্ন নেওয়া।",
    },
    sections: [
      { heading: { en: "Dual Diagnosis Care", bn: "দ্বৈত রোগনির্ণয় যত্ন" }, body: { en: "Integrated treatment addresses substance use and mental health conditions together, since treating one in isolation rarely leads to lasting results.", bn: "সমন্বিত চিকিৎসা মাদক ব্যবহার ও মানসিক স্বাস্থ্য সমস্যাগুলো একসাথে সমাধান করে, কারণ একটিকে আলাদাভাবে চিকিৎসা করলে খুব কমই দীর্ঘস্থায়ী ফলাফল পাওয়া যায়।" } },
      { heading: { en: "Stress & Trauma-Informed Care", bn: "চাপ ও মানসিক আঘাত-সচেতন যত্ন" }, body: { en: "Many paths to addiction begin with unresolved stress or trauma. Compassionate, trauma-informed therapy helps address root causes, not just symptoms.", bn: "আসক্তির অনেক পথ অমীমাংসিত চাপ বা মানসিক আঘাত থেকে শুরু হয়। সহানুভূতিশীল, আঘাত-সচেতন থেরাপি শুধু উপসর্গ নয়, মূল কারণ মোকাবেলায় সাহায্য করে।" } },
      { heading: { en: "Mindfulness & Coping Skills", bn: "মাইন্ডফুলনেস ও মোকাবিলা দক্ষতা" }, body: { en: "Practices like mindfulness, breathing exercises, and journaling build emotional regulation skills that support long-term stability.", bn: "মাইন্ডফুলনেস, শ্বাস-প্রশ্বাসের ব্যায়াম এবং জার্নালিংয়ের মতো অনুশীলন মানসিক নিয়ন্ত্রণ দক্ষতা গড়ে তোলে যা দীর্ঘমেয়াদী স্থিতিশীলতাকে সমর্থন করে।" } },
      { heading: { en: "Building Purpose & Connection", bn: "উদ্দেশ্য ও সংযোগ গড়ে তোলা" }, body: { en: "Reconnecting with hobbies, relationships, and goals restores a sense of identity and meaning beyond addiction.", bn: "শখ, সম্পর্ক এবং লক্ষ্যের সাথে পুনরায় সংযুক্ত হওয়া আসক্তির বাইরে পরিচয় ও অর্থের অনুভূতি ফিরিয়ে আনে।" } },
      { heading: { en: "Our Approach", bn: "আমাদের পদ্ধতি" }, body: { en: "Our team integrates mental health care into every stage of treatment, because we believe lasting recovery means caring for the whole person — mind, body, and spirit.", bn: "আমাদের দল চিকিৎসার প্রতিটি ধাপে মানসিক স্বাস্থ্য যত্ন অন্তর্ভুক্ত করে, কারণ আমরা বিশ্বাস করি দীর্ঘস্থায়ী পুনরুদ্ধার মানে সম্পূর্ণ ব্যক্তির — মন, দেহ ও আত্মার যত্ন নেওয়া।" } },
    ],
    closing: {
      en: "Mental wellness isn't the absence of struggle — it's having the tools, support, and self-compassion to navigate it. Healing the mind is just as vital as healing the body.",
      bn: "মানসিক সুস্থতা মানে সংগ্রামের অনুপস্থিতি নয় — এটি তা মোকাবেলা করার জন্য প্রয়োজনীয় হাতিয়ার, সহায়তা এবং আত্ম-সহানুভূতি থাকা। মনের নিরাময় দেহের নিরাময়ের মতোই গুরুত্বপূর্ণ।",
    },
    related: ["recovery-support", "understanding-treatment"],
  },
];

export function getResource(slug: string): ResourceArticle | undefined {
  return resources.find((r) => r.slug === slug);
}

export function searchResources(query: string): ResourceArticle[] {
  const q = query.trim().toLowerCase();
  if (!q) return resources;
  return resources.filter((r) => {
    const hay = [
      r.title.en, r.title.bn, r.category.en, r.category.bn,
      r.description.en, r.description.bn, r.intro.en, r.intro.bn,
      ...r.keywords,
      ...r.sections.flatMap((s) => [s.heading.en, s.heading.bn, s.body.en, s.body.bn, ...(s.items?.flatMap((i) => [i.en, i.bn]) ?? [])]),
      r.closing?.en ?? "", r.closing?.bn ?? "",
    ].join(" ").toLowerCase();
    return hay.includes(q);
  });
}