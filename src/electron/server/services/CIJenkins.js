import Jenkins from 'jenkins';
// import url from 'url'
import CIInterface from './CIInterface';

class CIJenkins extends CIInterface {
  constructor(configuration) {
    super();
    const jenkinsUrl = new URL(configuration.url);
    jenkinsUrl.username = configuration.username;
    jenkinsUrl.password = configuration.password;
    this.ci = new Jenkins({ baseUrl: jenkinsUrl.href });
  }

  getInfo(cb) {
    this.ci.info(function(err, data) {
      if (err) throw err;

      console.log('info', data);
      cb(data);
    });
  }

  getJob(name, cb) {
    this.ci.job.get(name, (err, data) => {
      if (err) throw err;

      const numberOfBuilds = Math.min(5, data.builds.length);
      let builds = [];

      for (let i = 0; i < numberOfBuilds; i++) {
        const build = data.builds[i];

        this.ci.build.get(name, build.number, (err, data) => {
          if (err) throw err;

          builds.push(data);

          if (builds.length === numberOfBuilds) {
            data.builds = builds;
            cb(data);
          }
        });
      }
    });
  }
}

export default CIJenkins;
