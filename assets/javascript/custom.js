function setHomeNavClass() {
  if($(this).scrollTop() > 200) {
    $('.floating-navbar').addClass('solid');
  } else {
    $('.floating-navbar').removeClass('solid');
  }
}

// <div class="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
//   <div class="d-flex flex-column text-left border bg-white rounded-1 p-3">
//     <div class="mb-1 font-weight-bold">
//       <a href="https://github.com/github/learning-lab-components">
//         <svg height="20" class="mr-1" viewBox="0 0 12 16" version="1.1" width="15" aria-hidden="true">
//           <path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z">
//           </path>
//         </svg>
//         learning-lab-components
//       </a>
//     </div>
//     <div class="mb-2">Open sourced components from GitHub Learning Lab</div>
//     <div>
//       <a href="https://github.com/github/learning-lab-components/stargazers" class="d-inline-block mr-4">
//         <svg height="20" class="mr-1" viewBox="0 0 14 16" version="1.1" width="17" aria-hidden="true">
//           <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z">
//           </path>
//         </svg>
//         25
//       </a>
//       <a href="https://github.com/github/learning-lab-components/network/members" class="d-inline-block mr-4">
//         <svg height="20" class="mr-1" viewBox="0 0 10 16" version="1.1" width="12" aria-hidden="true">
//           <path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 00-1-3.72C.88 1 0 1.89 0 3a2 2 0 001 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z">
//           </path>
//         </svg>
//         21
//       </a>
//     </div>
//   </div>
// </div>

function renderRepo(repo) {
// <div class="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
  parentDiv = document.createElement('div');
  parentDiv.className = "col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3";

//   <div class="d-flex flex-column text-left border bg-white rounded-1 p-3">
  boxDiv = document.createElement('div');
  boxDiv.className = "d-flex flex-column text-left border bg-white rounded-1 p-3";
  parentDiv.appendChild(boxDiv);

//     <div class="mb-1 font-weight-bold">
  titleDiv = document.createElement('div');
  titleDiv.className = "mb-1 font-weight-bold";
  boxDiv.appendChild(titleDiv);

//       <a href="https://github.com/github/learning-lab-components">
  a = document.createElement('a');
  a.href = repo.data.html_url;
  titleDiv.appendChild(a);

//         <svg height="20" class="mr-1" viewBox="0 0 12 16" version="1.1" width="15" aria-hidden="true">
  svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  svg.setAttribute("height", "20");
  svg.setAttribute("class", "mr-1");
  svg.setAttribute("viewBox", "0 0 12 16");
  svg.setAttribute("version", "1.1");
  svg.setAttribute("width", "15");
  svg.setAttribute("aria-hidden", "true");
  a.appendChild(svg);

//           <path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z">
  path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute("d", "M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z");
  svg.appendChild(path);

//           </path>
//         </svg>
//         learning-lab-components
  text = document.createTextNode(repo.data.name);
  a.appendChild(text);

//       </a>
//     </div>
//     <div class="mb-2">Open sourced components from GitHub Learning Lab</div>
  descriptionDiv = document.createElement('div');
  descriptionDiv.className = "mb-2";
  description = document.createTextNode(repo.data.description);
  descriptionDiv.appendChild(description);
  boxDiv.appendChild(descriptionDiv);

//     <div>
  detailsDiv = document.createElement('div');
  boxDiv.appendChild(detailsDiv);

//       <a href="https://github.com/github/learning-lab-components/stargazers" class="d-inline-block mr-4">
  a = document.createElement('a')
  a.href = repo.data.html_url + '/stargazers';
  a.className = "d-inline-block mr-4";
  detailsDiv.appendChild(a);

//         <svg height="20" class="mr-1" viewBox="0 0 14 16" version="1.1" width="17" aria-hidden="true">
  svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  svg.setAttribute("height", "20");
  svg.setAttribute("class", "mr-1");
  svg.setAttribute("viewBox", "0 0 14 16");
  svg.setAttribute("version", "1.1");
  svg.setAttribute("width", "17");
  svg.setAttribute("aria-hidden", "true");
  a.appendChild(svg);

//           <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z">
  path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute("d", "M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z");
  svg.appendChild(path);

//           </path>
//         </svg>
//         25
  stargazers = document.createTextNode(repo.data.stargazers_count);
  a.appendChild(stargazers);

//       </a>
//       <a href="https://github.com/github/learning-lab-components/network/members" class="d-inline-block mr-4">
  a = document.createElement('a')
  a.href = repo.data.html_url + '/network/members';
  a.className = "d-inline-block mr-4";
  detailsDiv.appendChild(a);

//         <svg height="20" class="mr-1" viewBox="0 0 10 16" version="1.1" width="12" aria-hidden="true">
  svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  svg.setAttribute("height", "20");
  svg.setAttribute("class", "mr-1");
  svg.setAttribute("viewBox", "0 0 10 16");
  svg.setAttribute("version", "1.1");
  svg.setAttribute("width", "12");
  svg.setAttribute("aria-hidden", "true");
  a.appendChild(svg);

//           <path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 00-1-3.72C.88 1 0 1.89 0 3a2 2 0 001 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z">
  path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute("d", "M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 00-1-3.72C.88 1 0 1.89 0 3a2 2 0 001 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z");
  svg.appendChild(path);
//           </path>
//         </svg>
//         21
  forks = document.createTextNode(repo.data.forks_count);
  a.appendChild(forks);

//       </a>
//     </div>
//   </div>
// </div>

  projectsDiv = document.getElementById("projects");
  projectsDiv.appendChild(parentDiv);

}

function fetchProjects(projects) {
  const octokit = Octokit({userAgent: 'Pythia Website', auth: github_token});

  for (project of projects) {
    const [owner, repo] = project.split('/');
    response = octokit.repos.get({owner: owner, repo: repo});
    response.then(renderRepo);
  }
}

$(document).ready(function() {
  setHomeNavClass();
  // Transition effect for navbar
  $(window).scroll(setHomeNavClass);

  fetchProjects(projects);
});
