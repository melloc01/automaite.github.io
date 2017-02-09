---
layout: styleguide-fluid
base: ../../
id: layout-components
---
<section>
  <div class="intro container">
    <h1 class="title is-1">Layout Components</h1>
    <p>Layout components are more complex components, usually "sections" of the page</p>
  </div>
  <br>
  <br>
  <div class="container">
    <h2 class="title is-2">Navigation</h2>
    <strong>Recipe nav</strong>
  </div>
  <div class="component-container">
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <strong>Recipe name</strong>
          </a>
        </div>
      </div>
    </nav>
  </div>
  <div class="container">
    <strong>Landing nav</strong>
  </div>
  <div class="component-container">
    <nav class="nav">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
          </a>
          <a class="nav-item is-tab is-hidden-mobile is-active">Home</a>
          <a class="nav-item is-tab is-hidden-mobile">Features</a>
          <a class="nav-item is-tab is-hidden-mobile">Pricing</a>
          <a class="nav-item is-tab is-hidden-mobile">About</a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <a class="nav-item is-tab is-hidden-tablet is-active">Home</a>
          <a class="nav-item is-tab is-hidden-tablet">Features</a>
          <a class="nav-item is-tab is-hidden-tablet">Pricing</a>
          <a class="nav-item is-tab is-hidden-tablet">About</a>
          <a class="nav-item is-tab">
            <figure class="image is-16x16" style="margin-right: 8px;">
              <img src="http://bulma.io/images/jgthms.png">
            </figure>
            Profile
          </a>
          <a class="nav-item is-tab">Log out</a>
        </div>
      </div>
    </nav>
  </div>
</section>
<section>
  <div class="container">
    <br>
    <h2 class="title is-2">Hero</h2>
    <strong>Recipe's landing page header</strong>
  </div>
  <div class="component-container">
    {% include recipe/hero.html %}
  </div>
</section>
