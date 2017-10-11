// Make a prediction: does the fact that the account object is constant mean
// that we can't update the password inside?  Why or why not?
// Try it out!
// If it turns out we *can* change the password, try to make it so that we
// can't.  Hint: the thing to google is object freeze

const account = {
  username: "marijn",
  password: "xyzzy"
}
Object.freeze(account);
account.password = "s3cret"

console.log(account.password)

// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Constant_non-constance
