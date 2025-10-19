   
const article_left_html_array = [
  "Introduction",
  "HTML Basic Structure", 
  "HTML Elements",
  "Text Formatting",
  "Links & Anchors",
  "Images & Multimedia",
  "Lists",
  "Tables",
  "Forms & Input",
  "Semantic HTML",
  "HTML Entities & Symbols",
  "Inline Frames",
  "HTML5 APIs & Advanced Features",
  "Global Attributes & Data- Attributes",
  "Best Practices",
  "HTML & CSS/JS Integration",
  "Deprecated & Obsolete Tags",
  "References & Resources"
];
const article_left_css_array = [
  "Introduction to CSS",
  "Selectors & Combinators",
  "Colors & Units",
  "Typography & Fonts",
  "Box Model",
  "Backgrounds & Borders",
  "Margin, Padding, and Spacing",
  "Positioning & Display",
  "Flexbox",
  "Grid Layout",
  "Float & Clear",
  "Responsive Design & Media Queries",
  "Transitions & Animations",
  "Transforms",
  "Custom Properties (CSS Variables)",
  "Pseudo-classes & Pseudo-elements",
  "Specificity & Inheritance",
  "Shadows & Effects",
  "Browser Prefixes & Compatibility",
  "Best Practices & Optimization",
  "Advanced CSS (Filters, Masks, Clip-Path)",
  "CSS Functions (calc(), var(), etc.)",
  "Print Styles",
  "Debugging CSS",
  "References & Resources"
];
const article_left_javascript_array= [
  "Introduction",
  "Basics & Syntax", 
  "Strings",
  "Numbers & Math",
  "Arrays",
  "Objects",
  "Functions",
  "Control Flow",
  "Scope & Hoisting",
  "Error Handling",
  "Events (Browser)",
  "DOM Manipulation",
  "BOM (Browser Object Model)",
  "JSON",
  "Asynchronous JavaScript",
  "Modules",
  "Regular Expressions",
  "Advanced Topics",
  "Web APIs & Fetch",
  "New ES Features (ES6+)",
  "Debugging & Tools"
];

let article_left_html;
article_left_html_array.forEach((headline,i)=>{ article_left_html+= `
  <div class="article_left_">
    <div class="article_left_">
      <a class="article_left_a" href="/HTML/${headline}.html">${headline}</a>
    </div>
  </div>`;

 })


 

let article_left_css;
article_left_css_array.forEach((headline) => {
  article_left_css += `
<div class="article_left_">
  <div class="article_left_">
    <a class="article_left_a" href="/CSS/${headline}.html">${headline}</a>
  </div>
</div>`;
});
let article_left_javascript;
article_left_javascript_array.forEach((headline, index) => {
  article_left_javascript += `
<div class="article_left_">
  <div class="article_left_">
    <a class="article_left_a" href="/JS/${headline}.html">${headline}</a>
  </div>
</div>`;
});
 

const a_l_h=article_left_html;
const a_l_c=article_left_css;
const a_l_j=article_left_javascript;
 export { article_left_html as a_l_h, article_left_css as a_l_c, article_left_javascript as a_l_j }
 
