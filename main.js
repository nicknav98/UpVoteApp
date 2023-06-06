const submissionComponent = {
    template: ` <div style="display: flex; width: 100%">
    <figure class="media-left">
      <img class="image is-64x64"
        v-bind:src="submission.submissionImage">
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>
            <a v-bind:href="submission.url" class="has-text-info">
              {{ submission.title }}
            </a>
            <span class="tag is-small">#{{ submission.id }}</span>
          </strong>
          <br>
            {{ submission.description }}
          <br>
          <small class="is-size-7">
            Submitted by:
            <img class="image is-24x24"
              v-bind:src="submission.avatar">
          </small>
        </p>
      </div>
    </div>
    <div class="media-right">
      <span class="icon is-small" v-on:click="upvote(submission.id)">
        <i class="fa fa-chevron-up"></i>
        <strong class="has-text-info">{{ submission.votes }}</strong>
      </span>
    </div>
  </div>`, 
//   HTML TEMPLATE LAYOUT - Used for Displaying Submissions in #App div on index.html
  props: ['submission', 'submissions'],
//   Props that passed through from upVoteApp instance, submission for singular instance, and submissions for array
  methods: {
    upvote(submissionId) { // Upvote method defined with submission ID and parameter
        const submission = this.submissions.find( //defining submission as a function that finds current submission by ID 
            (submission) => submission.id === submissionId 
        );
        submission.votes++; // add 1 vote to votes property of submission object
        },
    },
};

const upvoteApp = { //defining App instance 
    data() {
        return {
            submissions: Seed.submissions //parses seed.js object array to submissions array 
        };
    },

    computed: {
        sortedSubmissions() {
            return this.submissions.sort((a, b) => { //using inbuilt js method 'sort'
                return b.votes - a.votes; // return sorted submission in descending order by votes
            });
        },    
    },

    components: {
        "submission-component": submissionComponent, //component being parsed into Vue App's mount in index.html
    },
};

Vue.createApp(upvoteApp).mount("#app"); //mount app onto html div with id app

