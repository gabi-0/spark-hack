var fs = require('fs');
__dirname = "/ahack/public/"


module.exports = class output {
	req_id = 0;
	shown_up_to = 0;
	show_string = new Array();
	allow_to_print = false;
	res = false;

	constructor(r) {
		this.res = r;
		r.writeHead(200, {'Content-Type': 'text/html'});
	}

	writeBuff() {
		this.show_string.sort(function compareFn(firstEl, secondEl) {
			return firstEl[0] > secondEl[0];
		});

		for(var i = this.shown_up_to; i < this.show_string.length; i++) {
			if(this.show_string[i][1] !== false) {
				this.res.write(this.show_string[i][1]);
				this.shown_up_to = i+1;
			}
			else break;
		}
		if(this.req_id <= this.shown_up_to && this.allow_to_print)
			this.res.end();
	}

	string(str, m_id=false) {
		if(m_id === false) {
			var id = this.req_id++;
			this.show_string.push([id, str]);
		}
		else {
			this.show_string.forEach(el => {
				if(el[0] == m_id)
					el[1] = str;
			});
		}
		this.writeBuff();
	}

	buffer() {
		var id = this.req_id++;
		this.show_string.push([id, false]);
		return id;
	}

	file(fName) {
		var id = this.buffer();
		fs.readFile(__dirname + fName, (err, html) => {
			if(err) {
				this.string("error", id);
			}
			else {
				this.string(html.toString(), id);
			}
		});
	}

	send() {
		this.allow_to_print = true;
		this.writeBuff();
	}
}