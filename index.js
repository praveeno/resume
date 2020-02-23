function renderResume() {
    Promise.all([fetch('template.mustache'), fetch('resume.json')])
      .then(([tmplResp, jsonResp]) => [tmplResp.text(), jsonResp.json()])
      .then(([template, resumeJson]) => {
        var rendered = Mustache.render(template, resumeJson);
        document.getElementById('target').innerHTML = rendered;    
      });
}