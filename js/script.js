document.addEventListener("DOMContentLoaded", () => {

  function computeDuration(startDate, endDate) {
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }
    return { years, months };
  }

  function formatExperience(start, end, location, role) {
    const options = { year: "numeric", month: "long" };
    const startFormatted = start.toLocaleDateString("en-US", options);
    const endFormatted = end
      ? end.toLocaleDateString("en-US", options)
      : "Present";
    const duration = computeDuration(start, end || new Date());

    return `
      <strong>${role}</strong><br>
      ${startFormatted} – ${endFormatted}
      (${duration.years} years, ${duration.months} months)<br>
      ${location}
    `;
  }

  const experiences = [
    {
      start: new Date("2024-05-02"),
      end: null,
      location: "Manila Philippines - Onsite",
      role: "Associate Technology / TechBar",
      logo: "images/Experience/wtw.png"
    },
    {
      start: new Date("2022-08-05"),
      end: new Date("2024-05-02"),
      location: "Manila Philippines - Onsite",
      role: "Onsite Support",
      logo: "images/Experience/atos.png"
    },
    {
      start: new Date("2022-05-10"),
      end: new Date("2022-08-05"),
      location: "Manila Philippines - Onsite",
      role: "Technical Support Assistant",
      logo: "images/Experience/Terry.jpg"
    },
    {
      start: new Date("2021-03-15"),
      end: new Date("2022-03-15"),
      location: "Manila Philippines - Onsite",
      role: "IT and Data Analyst",
      logo: "images/Experience/cdc.png"
    },
    {
      start: new Date("2020-06-01"),
      end: new Date("2020-10-30"),
      location: "Manila Philippines - Onsite",
      role: "Information Technology",
      logo: "images/Experience/boehringer.png"
    },
    {
      start: new Date("2019-04-15"),
      end: new Date("2020-10-30"),
      location: "Manila Philippines - Onsite",
      role: "Technical Support Engineer",
      logo: "images/Experience/ics.png"
    }
  ];

  const listLeft = document.getElementById("experience-list");
  const listRight = document.getElementById("experience-list-2");

  if (!listLeft || !listRight) {
    console.error("❌ experience-list or experience-list-2 not found");
    return;
  }

  experiences.forEach((exp, index) => {
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.alignItems = "flex-start";
    li.style.gap = "12px";
    li.style.marginBottom = "16px";

    const img = document.createElement("img");
    img.src = exp.logo;
    img.style.width = "48px";
    img.style.height = "48px";
    img.style.objectFit = "contain";

    const text = document.createElement("div");
    text.innerHTML = formatExperience(
      exp.start,
      exp.end,
      exp.location,
      exp.role
    );

    li.appendChild(img);
    li.appendChild(text);

    index < 3 ? listLeft.appendChild(li) : listRight.appendChild(li);
  });

});
