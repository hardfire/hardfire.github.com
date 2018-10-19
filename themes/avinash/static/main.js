(function() {

  const commentBox = document.getElementById("webmentions");

  if(!commentBox)
    return

  const { url } = commentBox.dataset
  fetch(`https://webmention.io/api/mentions?target=${url}`)
  .then(r => r.json())
  .then(r => {
    return r.links.map(el => {
      if(el.data.author && el.activity.sentence_html)
        return `  <div class="mentionSingle">
            <div class="mention">
              ${el.activity.sentence_html}
              ${ el.data.published  ?
              `<div class="meta"><a href="${el.data.url}">${new Date(el.data.published_ts * 1000).toLocaleDateString('se')}</a></div>` :
              ""}
            </div>
          </div>
        `;
    }).join("")
  })
  .then(res => {
    commentBox.innerHTML = res
  })
}())
