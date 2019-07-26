module.exports = {
    validate: function(params) {
      return params.trim().match(/^center\s+(.*)$/);
    },

    render: function(tokens, idx) {
      var m = tokens[idx].info.trim().match(/^center\s+(.*)$/);

      if (tokens[idx].nesting === 1) {
        // opening tag
        return (
          "<div class=\"section-element center-box\">"
        );
      } else {
        // closing tag
        return "</div>\n";
      }
    }
  }