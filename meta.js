var exec = require('child_process').execSync;

var name, email;

try {
  name = exec('git config --get user.name');
  email = exec('git config --get user.email');
} catch (e) {
}

name = name && name.toString().trim();
email = email && email.toString().trim();

module.exports = {
  prompts: {
    name: {
      required: true,
      label: 'Project Name',
    },
    description: {
      required: true,
      label: 'Project Description',
      default: 'A Vue.js project',
    },
    vendor: {
      label: 'Github Username',
    },
    author_name: {
      label: 'Author Name',
      default: name || '',
    },
    author_email: {
      label: 'Author Email',
      default: email || '',
    },
    author: {
      label: 'Author',
    },
  },
};
