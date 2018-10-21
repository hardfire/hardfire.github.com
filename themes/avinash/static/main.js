(function() {

  const commentBox = document.getElementById("webmentions");

  if(!commentBox) return

  const { url } = commentBox.dataset

  fetch(`https://webmention.io/api/mentions?target=${url}`)
  .then(r => r.json())
  .then(r => r.links.map(processMention).join(""))
  .then(res => addMeta(res))
  .then(res => commentBox.innerHTML = res)

}())

function processMention(mention) {
  const { content, author, published_ts, url} = mention.data

  if(!author) return

  if(!content && !mention.activity.sentence_html) return

  const published_date = published_ts ?  `<span class="meta"><a href="${url}">${new Date(published_ts * 1000).toLocaleDateString('se')}</a></span>` : '';

  switch(mention.activity.type){
    case "repost":
      return `<div class="mentionSingle">
        <div class="mention">
          ${ published_date }
          <a href="${author.url}">${author.name}</a> retweeted <a href="${url}">a tweet</a>
        </div>
      </div>`;

    case "reply":
      return `<div class="mentionSingle">
        <div class="mention">
          ${ published_date }
          <a href="${author.url}">${author.name}</a> replied ${content} <a href="${url}">on twitter</a>
        </div>
      </div>`

    case "like":
      return `<div class="mentionSingle">
        <div class="mention">
          ${ published_date }
          <a href="${author.url}">${author.name}</a> liked <a href="${url}">a tweet</a>
        </div>
      </div>`;

    default:
      return "";
  }

}

function addMeta(response) {
  if(response == "") return "";
  else
    return ` <h2> Webmentions </h2> <div class="webmentions">${response}</div>`;
}
