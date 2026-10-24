/* GET registration page */
const register = function (req, res) {
  res.render('auth-form', {
    title: 'Register - ActivityLog',
    hideNav: true,
    pageHeader: {
      title: 'ActivityLog',
      strapline: 'Create your developer account'
    },
    form: {
      action: '/register',
      button: 'Register',
      fields: [
        { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
        { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
        { id: 'password', label: 'Password', type: 'password', placeholder: '••••••••' },
        { id: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: '••••••••' }
      ]
    },
    footerLink: {
      text: 'Already have an account?',
      linkText: 'Login',
      href: '/login'
    }
  });
};

/* GET login page */
const login = function (req, res) {
  res.render('auth-form', {
    title: 'Login - ActivityLog',
    hideNav: true,
    pageHeader: {
      title: 'ActivityLog',
      strapline: 'Welcome back! Please login.'
    },
    form: {
      action: '/login',
      button: 'Login',
      fields: [
        { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
        { id: 'password', label: 'Password', type: 'password', placeholder: '••••••••' }
      ]
    },
    footerLink: {
      text: "Don't have an account?",
      linkText: 'Register',
      href: '/register'
    }
  });
};

/* POST registration form (temporary: real saving comes later with MongoDB + Passport)
   Data the form sends: { name, email, password, confirmPassword } */
const doRegister = function (req, res) {
  res.redirect('/login');
};

/* POST login form (temporary: real checking comes later with Passport)
   Data the form sends: { email, password } */
const doLogin = function (req, res) {
  res.redirect('/');
};

module.exports = {
  register,
  login,
  doRegister,
  doLogin
};
