let day = new Date();
let currentDay = day.getDate();
let currentMonth = day.getMonth();
let currentYear = day.getFullYear();
document.write('<p>Learner name: Dung</p>')
document.write(`<p>Date: ${currentDay}/${currentMonth}/${currentYear}</p>`)

const JOB = `https://zsnkun-8080.csb.app/jobs?_page=1&_limit=25`;

async function getJobs() {
  try {
    const response = await fetch(`${JOB}`);
    const jobListData = await response.json();
    return jobListData;
  } catch (error) {
    console.log("error");
    return [];
  }
}

const renderGetJobs = async () => {
  try {
    const listJobs = await getJobs();
    console.log(listJobs);
    listJobs.forEach((element) => {
      const div = document.createElement("div");
      div.innerHTML = `<div class='job'>
        <ul class='job-title'>
          <h2>${element.city}</h2>
          <li>${element.salaryHigh}</li>
          <li>${element.salaryLow}</li>
          <li>${element.skills}</li>
        </ul>
      </div>`;
      document.body.appendChild(div);
    });
  } catch (error) {
    console.log("error");
  }
};

renderGetJobs();
