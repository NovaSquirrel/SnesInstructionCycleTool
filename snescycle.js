var instructionTypes = [
	"absolute", ["adc", "and", "bit", "cmp", "cpx", "cpy", "eor", "lda", "ora", "sbc", "sta", "stz"],
	["op", "param", "param", "datal", "datah"],
	"absolute", ["ldx", "ldy", "stx", "sty"],
	["op", "param", "param", "datalx", "datahx"],

	"absolute", ["asl", "dec", "inc", "lsr", "rol", "ror", "trb", "tsb"],
	["op", "param", "param", "datal", "datah", "io", "datah", "datal"],
	"absolute long", ["adc", "and", "cmp", "eor", "lda", "ora", "sbc", "sta"],
	["op", "param", "param", "param", "datal", "datah"],
	"absolute,x long", ["adc", "and", "cmp", "eor", "lda", "ora", "sbc", "sta"],
	["op", "param", "param", "param", "datal", "datah"],

	"absolute,x", ["adc", "and", "bit", "cmp", "eor", "lda", "ora", "sbc"],
	["op", "param", "param", "io_pagecross_or_i16", "datal", "datah"],
	"absolute,x", ["ldy"],
	["op", "param", "param", "io_pagecross_or_i16", "datalx", "datahx"],
	"absolute,x", ["sta", "stz"],
	["op", "param", "param", "io", "datal", "datah"],

	"absolute,y", ["adc", "and", "cmp", "eor", "lda", "ora", "sbc"],
	["op", "param", "param", "io_pagecross_or_i16", "datal", "datah"],
	"absolute,y", ["ldx"],
	["op", "param", "param", "io_pagecross_or_i16", "datalx", "datahx"],
	"absolute,y", ["sta"],
	["op", "param", "param", "io", "datal", "datah"],

	"absolute,x", ["asl", "dec", "inc", "lsr", "rol", "ror"],
	["op", "param", "param", "io", "datal", "datah", "io", "datah", "datal"],
	"direct", ["adc", "and", "bit", "cmp", "eor", "lda", "ora", "sbc", "sta", "stz"],
	["op", "param", "direct_unaligned", "directl", "directh"],
	"direct", ["cpx", "cpy", "ldx", "ldy", "stx", "sty"],
	["op", "param", "direct_unaligned", "directlx", "directhx"],

	"direct,x", ["adc", "and", "bit", "cmp", "eor", "lda", "ora", "sbc", "sta", "stz"],
	["op", "param", "direct_unaligned", "io", "directl", "directh"],
	"direct,x", ["ldy", "sty"],
	["op", "param", "direct_unaligned", "io", "directl", "directh"],
	"direct,y", ["ldx", "stx"],
	["op", "param", "direct_unaligned", "io", "directlx", "directhx"],
	"direct", ["asl", "dec", "inc", "lsr", "rol", "ror", "trb", "tsb"],
	["op", "param", "direct_unaligned", "directl", "directh", "io", "directh", "directl"],
	"direct,x", ["asl", "dec", "inc", "lsr", "rol", "ror"],
	["op", "param", "direct_unaligned", "io", "directl", "directh", "io", "directh", "directl"],
	"(direct)",  ["adc", "and", "cmp", "eor", "lda", "ora", "sbc", "sta"],
	["op", "param", "direct_unaligned", "pointerl", "pointerh", "datal", "datah"],
	"(direct,x)", ["adc", "and", "cmp", "eor", "lda", "ora", "sbc", "sta"],
	["op", "param", "direct_unaligned", "io", "pointerl", "pointerh", "datal", "datah"],
	"(direct),y", ["adc", "and", "cmp", "eor", "lda", "ora", "sbc"],
	["op", "param", "direct_unaligned", "pointerl", "pointerh", "io_pagecross_or_i16", "datal", "datah"],
	"(direct),y", ["sta"],
	["op", "param", "direct_unaligned", "pointerl", "pointerh", "io", "datal", "datah"],
	"[direct]",  ["adc", "and", "cmp", "eor", "lda", "ora", "sbc", "sta"],
	["op", "param", "direct_unaligned", "pointerl", "pointerh", "pointerb", "datal", "datah"],
	"[direct],y", ["adc", "and", "cmp", "eor", "lda", "ora", "sbc", "sta"],
	["op", "param", "direct_unaligned", "pointerl", "pointerh", "pointerb", "datal", "datah"],
	"d,s", ["adc", "and", "cmp", "eor", "lda", "ora", "sbc", "sta"],
	["op", "param", "io", "stackl", "stackha"],
	"(d,s),y", ["adc", "and", "cmp", "eor", "lda", "ora", "sbc", "sta"],
	["op", "param", "io", "stackpointer", "stackpointer", "io", "datal", "datah"],

	"immediate", ["adc", "and", "bit", "cmp", "eor", "lda", "ora"],
	["op", "param", "paramh"],
	"immediate", ["cpx", "cpy", "ldx", "ldy"],
	["op", "param", "paramhx"],
	"immediate", ["rep", "sep"],
	["op", "param", "io"],
	"accumulator", ["asl", "dec", "inc", "lsr", "rol", "ror"],
	["op", "io"],
	"implied", ["clc", "cld", "cli", "clv", "dex", "dey", "inx", "iny", "nop", "sec", "sed", "sei", "tax", "tay", "tcd", "tcs", "tdc", "tsc", "tsx", "txa", "txs", "txy", "tya", "tyx", "xce"],
	["op", "io"],
	"implied", ["xba"],
	["op", "io", "io"],

	"branch taken", ["bcc", "bcs", "beq", "bmi", "bne", "bpl", "bra", "bvc", "bvs"],
	["op", "param", "io", "io_emulation_and_cross"],
	"branch taken", ["brl"],
	["op", "param", "param", "io"],
	"branch not taken", ["bcc", "bcs", "beq", "bmi", "bne", "bpl", "bvc", "bvs"],
	["op", "param"],

	"stack", ["pha"],
	["op", "io", "stackha", "stackl"],
	"stack", ["phb", "php", "phk"],
	["op", "io", "stackl"],
	"stack", ["phx", "phy"],
	["op", "io", "stackhx", "stackl"],
	"stack", ["phd"],
	["op", "io", "stackh", "stackl"],

	"stack", ["pla"],
	["op", "io", "io", "stackl", "stackha"],
	"stack", ["plx", "ply"],
	["op", "io", "io", "stackl", "stackhx"],
	"stack", ["plb", "plp"],
	["op", "io", "io", "stackl"],
	"stack", ["pld"],
	["op", "io", "io", "stackl", "stackh"],

	"stack", ["pea"],
	["op", "param", "param", "stackh", "stackl"],
	"stack", ["pei"],
	["op", "param", "direct_unaligned", "direct16", "direct16", "stackh", "stackl"],
	"stack", ["per"],
	["op", "param", "param", "io", "stackh", "stackl"],
	"stack", ["rts"],
	["op", "io", "io", "stackl", "stackh", "io"],
	"stack", ["rtl"],
	["op", "io", "io", "stackl", "stackh", "stackb", "io"],
	"stack", ["rti"],
	["op", "io", "io", "stackp", "stackl", "stackh", "stackb", "io"],
	"interrupt", ["abort", "irq", "nmi", "reset"],
	["io", "io", "stackb", "stackh", "stackl", "stackp", "vectorl", "vectorh"],
	"immediate", ["brk", "cop"],
	["op", "param", "stackb", "stackh", "stackl", "stackp", "vectorl", "vectorh"],

	"absolute", ["jmp"],
	["op", "param", "param"],
	"absolute long", ["jml"],
	["op", "param", "param", "param"],
	"absolute", ["jsr"],
	["op", "param", "param", "io", "stackh", "stackl"],
	"absolute long", ["jsl"],
	["op", "param", "param", "stackb", "io", "param", "stackh", "stackl"],
	"(absolute)", ["jmp"],
	["op", "param", "param", "vectorl", "vectorh"],
	"[absolute]", ["jml"],
	["op", "param", "param", "vectorl", "vectorh", "vectorb"],
	"(absolute,x)", ["jmp"],
	["op", "param", "param", "io", "vectorcodel", "vectorcodeh"],
	"(absolute,x)", ["jsr"],
	["op", "param", "stackh", "stackl", "param", "io", "vectorcodel", "vectorcodeh"],
];

let a16 = true;
let i16 = true;
let dpunalign = false;
let pagecross = false;
let emulation = false;
let fastcode = true;
let fastdata = false;
let fastdp = false;
let faststack = false;

function costOfStep(step) {
	const slow = 8;
	const fast = 6;
	let codespeed  = fastcode  ? fast : slow;
	let dataspeed  = fastdata  ? fast : slow;
	let dpspeed    = fastdp    ? fast : slow;
	let stackspeed = faststack ? fast : slow;

	switch(step) {
		case "direct_unaligned":
			return dpunalign ? fast : 0;
		case "io":
			return fast;

		case "op":
		case "param":
			return codespeed;
		case "paramh":
			return a16 ? codespeed : 0;
		case "paramhx":
			return i16 ? codespeed : 0;

		case "datal":
			return dataspeed;
		case "datah":
			return a16 ? dataspeed : 0;

		case "datalx":
			return dataspeed;
		case "datahx":
			return i16 ? dataspeed : 0;

		case "direct16":
		case "directl":
			return dpspeed;
		case "directh":
			return a16 ? dpspeed : 0;
		case "directlx":
			return dpspeed;
		case "directhx":
			return i16 ? dpspeed : 0;

		case "io_pagecross_or_i16":
			return (i16 || pagecross) ? fast : 0;
		case "io_emulation_and_cross":
			return (emulation && pagecross) ? fast : 0;

		case "pointerl":
		case "pointerh":
		case "pointerb":
			return dpspeed;

		case "stackl":
		case "stackh":
		case "stackp":
		case "stackb":
		case "stackpointer":
			return stackspeed;
		case "stackha":
			return a16 ? stackspeed : 0;
		case "stackhx":
			return i16 ? stackspeed : 0;

		case "vectorl":
		case "vectorh":
		case "vectorb":
			return slow;
		case "vectorcodel":
		case "vectorcodeh":
			return codespeed;
		default:
			console.log(step);
	}
}

function classOfStep(step) {
	switch(step) {
		case "io_pagecross_or_i16":
		case "direct_unaligned":
		case "io_emulation_and_cross":
			return "cycle_penalty"
		case "io":
			return "cycle_internal_operation"
		case "op":
		case "param":
		case "paramh":
		case "paramhx":
			return "cycle_code";
		case "datal":
		case "datah":
		case "datalx":
		case "datahx":
			return "cycle_data";
		case "directl":
		case "directh":
		case "direct16":
		case "directlx":
		case "directhx":
			return "cycle_direct";
		case "pointerl":
		case "pointerh":
		case "pointerb":
			return "cycle_pointer";
		case "stackha":
		case "stackpointer":
		case "stackl":
		case "stackh":
		case "stackp":
		case "stackb":
		case "stackha":
		case "stackhx":
			return "cycle_stack";
		case "vectorl":
		case "vectorh":
		case "vectorb":
		case "vectorcodel":
		case "vectorcodeh":
			return "cycle_vector";
		default:
			return "cycle";
	}
}

function initTable() {
	refreshTable();
}

function refreshTable() {
	let output = document.getElementById("output");
	// Remove all table rows except the first one
	while (output.children.length > 1) {
		output.removeChild(output.children[1]);
	}

	// Get parameters
	a16 = document.getElementById("a16").checked;
	i16 = document.getElementById("i16").checked;
	dpunalign = document.getElementById("dpunalign").checked;
	pagecross = document.getElementById("pagecross").checked;
	emulation = document.getElementById("emulation").checked;
	fastcode = document.getElementById("fastcode").checked;
	fastdata = document.getElementById("fastdata").checked;
	fastdp = document.getElementById("fastdp").checked;
	faststack = document.getElementById("faststack").checked;
	search = document.getElementById("search").value.toLowerCase();
	let hasSearch = search !== null && !search.match(/^ *$/);

	for(let i=0; i<instructionTypes.length/3; i++) {
		let group = instructionTypes[i*3+0];
		let operations = instructionTypes[i*3+1];
		let cycleList = instructionTypes[i*3+2];

		// Should this row be made?
		if(hasSearch) {
			let hasSearchedFor = false;
			for(let j=0; j<operations.length; j++) {
				if(operations[j].startsWith(search)) {
					hasSearchedFor = true
					break;
				}
			}
			if(!hasSearchedFor)
				continue;
		}

		let row = document.createElement("tr");
		row.classList.add("results");
		output.append(row);

		function cell(t, className) {
			let c = document.createElement("td");
			c.innerHTML = t;
			c.classList.add(className);
			row.append(c);
		}

		cell(group,                "group");
		cell(operations.join(" "), "operations");

		let fillerCycles = 9;
		let totalMasterCycles = 0;

		for(let j=0; j<cycleList.length; j++) {
			let step = cycleList[j];
			let speed = costOfStep(step);
			totalMasterCycles += speed;
			if(speed) {
				cell(speed, classOfStep(cycleList[j]));
				fillerCycles--;
			}
		}
		for(let j=0; j<fillerCycles; j++) {
			cell("", "cycle");
		}
		cell(totalMasterCycles, "total");

	}
}
