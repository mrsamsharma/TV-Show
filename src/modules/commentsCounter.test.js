import commentsCounter from "./commentsCounter.js";

test("Count number of comments in the popup", () => {
  document.body.innerHTML = `
  <div class="popup-container" style="display: block;">
  <div class="popup">
  <img class="original-img" alt="" src="https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg">
  <span class="close-popup-btn">
    <i class="fa-solid fa-xmark"></i>
  </span>

  <!-- details -->
  <div class="details">
    <h1>Under the Dome</h1>
    <ul>
      <li><span>Type: </span><span>Scripted</span></li>
      <li><span>Rating: </span><span>6.5</span></li>
      <li><span>Run time: </span><span>60 min</span></li>
      <li><span>Language: </span><span>English</span></li>
    </ul>
    <div class="excerpt">
    <p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>
    </div>
  </div>
  <!-- comments -->
  <div class="comments">
    <h4>Comments(<span class="comments-count">17</span>)</h4>
    <ul class="comments-list">
      <li class="item">
        <span>2022-08-04 Michael:</span> <span>The best show I have ever watched</span>
      </li>
    
      <li class="item">
        <span>2022-08-04 John Does:</span> <span>Looks promising</span>
      </li>
    
      <li class="item">
        <span>2022-08-04 Sam:</span> <span>Amazing show</span>
      </li>
    
      <li class="item">
        <span>2022-08-04 Ken:</span> <span>4th comment</span>
      </li>
    
      <li class="item">
        <span>2022-08-04 Alphayo:</span> <span>5th comment</span>
      </li>
    
      <li class="item">
        <span>2022-08-04 Sam:</span> <span>6th comment</span>
      </li>
    
      <li class="item">
        <span>2022-08-04 Sam:</span> <span>Test</span>
      </li>
    
      <li class="item">
        <span>2022-08-04 Sam:</span> <span>Test 2</span>
      </li>
    
      <li class="item">
        <span>2022-08-04 9th comment:</span> <span>9th comment</span>
      </li>
    
      <li class="item">
        <span>2022-08-04 10th:</span> <span>10th</span>
      </li>
    
      <li class="item">
        <span>2022-08-04 11th :</span> <span>11th</span>
      </li>
    
      <li class="item">
        <span>2022-08-04 12th:</span> <span>12th</span>
      </li>
    
      <li class="item">
        <span>2022-08-04 13th:</span> <span>13th</span>
      </li>
    
      <li class="item">
        <span>2022-08-04 14th:</span> <span>14th</span>
      </li>
    
      <li class="item">
        <span>2022-08-04 15th:</span> <span>15th</span>
      </li>
    
      <li class="item">
        <span>2022-08-04 16th:</span> <span>16th</span>
      </li>
    
      <li class="item">
        <span>2022-08-04 Marie:</span> <span>Entertaining</span>
      </li>
    </ul>
    <h4>Add Comment</h4>
    <form id="add-comment">
      <input type="text" id="name" placeholder="Your name">
      <br>
      <textarea id="comment" cols="36" rows="10" placeholder="Your insights"></textarea>
      <br>
      <button class="submit-comment" id="1" type="button">Comment</button>
    </form>
  </div>
</div>
  </div>
    `;
  
  expect(commentsCounter()).toBe(17);
});
