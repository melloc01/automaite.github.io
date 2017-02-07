---
layout: styleguide
---
<section class="intro">
    <h1 class="title is-1">
      Components
    </h1>
    <p>
      Components are the simple pieces that are used to build interfaces, like buttons or inputs.
    </p>
</section>

<section class="buttons">
  <section>
    <br>
    <h2 class="title is-2">Buttons</h2>
    <p class="subtitle is-5">Button styles</p>

    <div class="block">
      <a class="button">Button</a>
      <a class="button is-white">White</a>
      <a class="button is-light">Light</a>
      <a class="button is-dark">Dark</a>
      <a class="button is-black">Black</a>
      <a class="button is-link">Link</a>
    </div>
    <div class="block">
      <a class="button is-primary">Primary</a>
      <a class="button is-info">Info</a>
      <a class="button is-success">Success</a>
      <a class="button is-warning">Warning</a>
      <a class="button is-danger">Danger</a>
    </div>
    <br>
    <br>

    <p class="subtitle is-5">Button states</p>

    <a class="button is-primary is-outlined">
      Button
    </a>
    <a class="button is-primary is-loading">
      Button
    </a>
    <a class="button is-primary is-disabled">
      Button
    </a>
    <br>
    <br>

    <p class="subtitle is-5">Button with icon</p>
    <p class="control">
      <a class="button">
        <span class="icon is-small">
          <i class="fa fa-bold"></i>
        </span>
      </a>
      <a class="button">
        <span class="icon is-small">
          <i class="fa fa-italic"></i>
        </span>
      </a>
      <a class="button">
        <span class="icon is-small">
          <i class="fa fa-underline"></i>
        </span>
      </a>
    </p>
    <p class="control">
      <a class="button">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
        <span>GitHub</span>
      </a>
      <a class="button is-primary">
        <span class="icon">
          <i class="fa fa-twitter"></i>
        </span>
        <span>Twitter</span>
      </a>
      <a class="button is-success">
        <span class="icon is-small">
          <i class="fa fa-check"></i>
        </span>
        <span>Save</span>
      </a>
      <a class="button is-danger is-outlined">
        <span>Delete</span>
        <span class="icon is-small">
          <i class="fa fa-times"></i>
        </span>
      </a>
    </p>
    <p class="control">
      <a class="button is-small">
        <span class="icon is-small">
          <i class="fa fa-github"></i>
        </span>
        <span>GitHub</span>
      </a>
      <a class="button">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
        <span>GitHub</span>
      </a>
      <a class="button is-medium">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
        <span>GitHub</span>
      </a>
      <a class="button is-large">
        <span class="icon is-medium">
          <i class="fa fa-github"></i>
        </span>
        <span>GitHub</span>
      </a>
    </p>

    <br>
    <br>
    <p class="subtitle is-5">Button sizes</p>

    <a class="button is-small">
      Button
    </a>
    <a class="button">
      Button
    </a>
    <a class="button is-medium">
      Button
    </a>
    <a class="button is-large">
      Button
    </a>

    <br>
    <br>
    <p class="subtitle is-5">Button Group</p>
    <div class="control is-grouped">
      <p class="control has-addons">
        <a class="button">
          <span class="icon is-small">
            <i class="fa fa-bold"></i>
          </span>
          <span>Bold</span>
        </a>
        <a class="button">
          <span class="icon is-small">
            <i class="fa fa-italic"></i>
          </span>
          <span>Italic</span>
        </a>
        <a class="button">
          <span class="icon is-small">
            <i class="fa fa-underline"></i>
          </span>
          <span>Underline</span>
        </a>
      </p>
      <p class="control has-addons">
        <a class="button">
          <span class="icon is-small">
            <i class="fa fa-align-left"></i>
          </span>
          <span>Left</span>
        </a>
        <a class="button">
          <span class="icon is-small">
            <i class="fa fa-align-center"></i>
          </span>
          <span>Center</span>
        </a>
        <a class="button">
          <span class="icon is-small">
            <i class="fa fa-align-right"></i>
          </span>
          <span>Right</span>
        </a>
      </p>
    </div>

  </section>
  <section>
    <br>
    <h2 class="title is-2">Box</h2>
    <div class="box is-half column">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
              <br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
            </p>
          </div>
          <nav class="level">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fa fa-reply"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fa fa-retweet"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fa fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </section>
  <section>
    <br>
    <h2 class="title is-2">Notification</h2>
    <div class="columns">

      <div class="column">
        <div class="notification">
          <button class="delete"></button>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </div>

        <div class="notification is-primary">
          <button class="delete"></button>
          Primar lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </div>

        <div class="notification is-info">
          <button class="delete"></button>
          Info lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </div>
      </div>
      <div class="column">
        <div class="notification is-success">
          <button class="delete"></button>
          Success lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </div>

        <div class="notification is-warning">
          <button class="delete"></button>
          Warning lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </div>

        <div class="notification is-danger">
          <button class="delete"></button>
          Danger lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </div>
      </div>
    </div>
  </section>
  <section>
    <br>
    <h2 class="title is-2">Tags</h2>
    <p class="subtitle is-5">Tag styles</p>

    <span class="tag is-black">Black</span>
    <span class="tag is-dark">Dark</span>
    <span class="tag is-light">Light</span>
    <span class="tag is-white">White</span>
    <span class="tag is-primary">Primary</span>
    <span class="tag is-info">Info</span>
    <span class="tag is-success">Success</span>
    <span class="tag is-warning">Warning</span>
    <span class="tag is-danger">Danger</span>
    <br/>
    <br>
    <p class="subtitle is-5">Tags size icon</p>
    <span class="tag is-success">
      Bar
      <button class="delete is-small"></button>
    </span>
    <span class="tag is-warning is-medium">
      Hello
      <button class="delete is-small"></button>
    </span>
    <span class="tag is-danger is-large">
      World
      <button class="delete"></button>
    </span>
  </section>
</section>
