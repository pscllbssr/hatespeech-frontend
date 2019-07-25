module.exports = {
    validate: function(params) {
      return params.trim().match(/^info\s+(.*)$/);
    },

    render: function(tokens, idx) {
      var m = tokens[idx].info.trim().match(/^info\s+(.*)$/);

      if (tokens[idx].nesting === 1) {
        // opening tag
        return (
          "<div class=\"section-element info-box\">"
        );
      } else {
        // closing tag
        return "</div>\n";
      }
    }
  }