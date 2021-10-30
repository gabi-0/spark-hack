var database = firebase.database();

console.log(database);

const ref = firebase.database().ref('posts');

ref.once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      console.log(childData);
      let docs = document.getElementById('cardss');
      docs.innerHTML = docs.innerHTML + `        <div class="card">
      <h5 class="card-header">Featured</h5>
      <div class="card-body">
        <h5 class="card-title">${childData.namePost}</h5>
        <p class="card-text">${childData.review_post}</p>
        <a href="#" class="btn btn-primary">Add Points</a>
        <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#commentModal">Comment</a>
        <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#showComments">View</a>
        <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="modal_post" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modal_comment">Comment</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="review">Add Comment</label>
                    <textarea class="form-control" id="review" rows="3"></textarea>
                  </div>
                  <button type="submit" class="btn btn-outline-info btn-lg rounded-pill m-4">Comment</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="showComments" tabindex="-1" role="dialog" aria-labelledby="show-comments" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="show-comments">Show Comment</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Comments</h5>
                    <p>This is a comment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class="card-footer text-muted">
        ${childData.points} Points
      </div>
    </div>`
    });
  });