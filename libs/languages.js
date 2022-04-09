const Languages = {
	Search: function (query, callback) {
		// search for item by key name or wikipedia froim this.COdes array
		if (query) {
			var query = query.toLowerCase();
			var codes = Object.keys(this.Codes);
			var value = {};
			var filter = codes.filter(function (name) {
				return name.match(query);
			});
			if (filter.length === 0) {
				value = "No result found";
			} else {
				filter.forEach((elm) => {
					value[elm] = this.Codes[elm];
				});
			}
			if (typeof callback === "function") {
				callback(value);
			}
			return value;
		}
	},

	Codes: {
		en: {
			name: "English Wikipedia",
			language: "English",
		},
		fr: {
			name: "WikipÃ©dia en franÃ§ais",
			language: "French",
		},
		de: {
			name: "Deutschsprachige Wikipedia",
			language: "German",
		},
		es: {
			name: "Wikipedia en espaÃ±ol",
			language: "Spanish",
		},
		ja: {
			name: "ã‚¦ã‚£ã‚­ãƒšãƒ‡ã‚£ã‚¢ æ—¥æœ¬èªžç‰ˆ",
			language: "Japanese",
		},
		ru: {
			name: "Ð ÑƒÑÑÐºÐ°Ñ Ð’Ð¸ÐºÐ¸Ð¿ÐµÐ´Ð¸Ñ",
			language: "Russian",
		},
		pt: {
			name: "WikipÃ©dia em portuguÃªs",
			language: "Portuguese",
		},
		zh: {
			name: "ä¸­æ–‡ç¶­åŸºç™¾ç§‘",
			language:
				"Chinese (written vernacular Chinese, a form of Mandarin)",
		},
		it: {
			name: "Wikipedia in italiano",
			language: "Italian",
		},
		fa: {
			name: "ÙˆÛŒÚ©ÛŒâ€ŒÙ¾Ø¯ÛŒØ§ÛŒ ÙØ§Ø±Ø³ÛŒ",
			language: "Persian",
		},
		ar: {
			name: "ÙˆÙŠÙƒÙŠØ¨ÙŠØ¯ÙŠØ§ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
			language: "Arabic",
		},
		pl: {
			name: "PolskojÄ™zyczna Wikipedia",
			language: "Polish",
		},
		nl: {
			name: "Nederlandstalige Wikipedia",
			language: "Dutch",
		},
		uk: {
			name: "Ð£ÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ° Ð’Ñ–ÐºÑ–Ð¿ÐµÐ´Ñ–Ñ",
			language: "Ukrainian",
		},
		id: {
			name: "Wikipedia bahasa Indonesia",
			language: "Indonesian",
		},
		he: {
			name: "×•×™×§×™×¤×“×™×” ×”×¢×‘×¨×™×ª",
			language: "Hebrew",
		},
		vi: {
			name: "Wikipedia tiáº¿ng Viá»‡t",
			language: "Vietnamese",
		},
		tr: {
			name: "TÃ¼rkÃ§e Vikipedi",
			language: "Turkish",
		},
		sv: {
			name: "SvensksprÃ¥kiga Wikipedia",
			language: "Swedish",
		},
		ko: {
			name: "í•œêµ­ì–´ ìœ„í‚¤ë°±ê³¼",
			language: "Korean",
		},
		cs: {
			name: "ÄŒeskÃ¡ Wikipedie",
			language: "Czech",
		},
		fi: {
			name: "Suomenkielinen Wikipedia",
			language: "Finnish",
		},
		hu: {
			name: "Magyar WikipÃ©dia",
			language: "Hungarian",
		},
		ca: {
			name: "ViquipÃ¨dia en catalÃ ",
			language: "Catalan",
		},
		hi: {
			name: "à¤¹à¤¿à¤¨à¥à¤¦à¥€ à¤µà¤¿à¤•à¤¿à¤ªà¥€à¤¡à¤¿à¤¯à¤¾",
			language: "Hindi",
		},
		simple: {
			name: "Simple English Wikipedia",
			language: "Simple English",
		},
		no: {
			name: "BokmÃ¥l Wikipedia",
			language: "Norwegian (BokmÃ¥l)",
		},
		bn: {
			name: "à¦¬à¦¾à¦‚à¦²à¦¾ à¦‰à¦‡à¦•à¦¿à¦ªà¦¿à¦¡à¦¿à¦¯à¦¼à¦¾",
			language: "Bengali",
		},
		th: {
			name: "à¸§à¸´à¸à¸´à¸žà¸µà¹€à¸”à¸µà¸¢à¸ à¸²à¸©à¸²à¹„à¸—à¸¢",
			language: "Thai",
		},
		el: {
			name: "Î•Î»Î»Î·Î½Î¹ÎºÎ® Î’Î¹ÎºÎ¹Ï€Î±Î¯Î´ÎµÎ¹Î±",
			language: "Greek",
		},
		ro: {
			name: "Wikipedia Ã®n romÃ¢nÄƒ",
			language: "Romanian",
		},
		da: {
			name: "Dansk Wikipedia",
			language: "Danish",
		},
		az: {
			name: "AzÉ™rbaycanca Vikipediya",
			language: "Azerbaijani",
		},
		sr: {
			name: "Ð’Ð¸ÐºÐ¸Ð¿ÐµÐ´Ð¸Ñ˜Ð° Ð½Ð° ÑÑ€Ð¿ÑÐºÐ¾Ð¼ Ñ˜ÐµÐ·Ð¸ÐºÑƒ",
			language: "Serbian",
		},
		bg: {
			name: "Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¾ÐµÐ·Ð¸Ñ‡Ð½Ð° Ð£Ð¸ÐºÐ¸Ð¿ÐµÐ´Ð¸Ñ",
			language: "Bulgarian",
		},
		ms: {
			name: "Wikipedia Bahasa Melayu",
			language: "Malay",
		},
		et: {
			name: "Eestikeelne Vikipeedia",
			language: "Estonian",
		},
		hr: {
			name: "Hrvatska Wikipedija",
			language: "Croatian",
		},
		hy: {
			name: "Õ€Õ¡ÕµÕ¥Ö€Õ¥Õ¶ ÕŽÕ«Ö„Õ«ÕºÕ¥Õ¤Õ«Õ¡",
			language: "Armenian",
		},
		sk: {
			name: "SlovenskÃ¡ Wikipedia",
			language: "Slovak",
		},
		ml: {
			name: "Malayalam Wikipedia",
			language: "Malayalam",
		},
		eu: {
			name: "Euskarazko Wikipedia",
			language: "Basque",
		},
		"zh-yue": {
			name: "Cantonese Wikipedia",
			language: "Cantonese",
		},
		sl: {
			name: "Slovenska Wikipedija",
			language: "Slovene",
		},
		eo: {
			name: "Vikipedio en Esperanto",
			language: "Esperanto",
		},
		lt: {
			name: "LietuviÅ¡koji Vikipedija",
			language: "Lithuanian",
		},
		ta: {
			name: "à®¤à®®à®¿à®´à¯ à®µà®¿à®•à¯à®•à®¿à®ªà¯€à®Ÿà®¿à®¯à®¾",
			language: "Tamil",
		},
		sq: {
			name: "Wikipedia shqip",
			language: "Albanian",
		},
		lv: {
			name: "VikipÄ“dija latvieÅ¡u valodÄ",
			language: "Latvian",
		},
		be: {
			name: "Ð‘ÐµÐ»Ð°Ñ€ÑƒÑÐºÐ°Ñ Ð’Ñ–ÐºÑ–Ð¿ÐµÐ´Ñ‹Ñ",
			language: "Belarusian",
		},
		gl: {
			name: "Galipedia",
			language: "Galician",
		},
		ka: {
			name: "áƒ¥áƒáƒ áƒ—áƒ£áƒšáƒ˜ áƒ•áƒ˜áƒ™áƒ˜áƒžáƒ”áƒ“áƒ˜áƒ",
			language: "Georgian",
		},
		ur: {
			name: "Ø§Ø±Ø¯Ùˆ ÙˆÛŒÚ©ÛŒÙ¾ÛŒÚˆÛŒØ§",
			language: "Urdu",
		},
		kk: {
			name: "ÒšÐ°Ð·Ð°Ò›ÑˆÐ° Ð£Ð¸ÐºÐ¸Ð¿ÐµÐ´Ð¸Ñ",
			language: "Kazakh",
		},
		mk: {
			name: "ÐœÐ°ÐºÐµÐ´Ð¾Ð½ÑÐºÐ° Ð’Ð¸ÐºÐ¸Ð¿ÐµÐ´Ð¸Ñ˜Ð°",
			language: "Macedonian",
		},
		uz: {
			name: "OÊ»zbekcha Vikipediya",
			language: "Uzbek",
		},
		te: {
			name: "à°¤à±†à°²à±à°—à± à°µà°¿à°•à±€à°ªà±€à°¡à°¿à°¯à°¾",
			language: "Telugu",
		},
		mr: {
			name: "Marathi Wikipedia",
			language: "Marathi",
		},
		sh: {
			name: "Srpskohrvatska Wikipedija",
			language: "Serbo-Croatian",
		},
		arz: {
			name: "ÙˆÙŠÙƒÙŠÙ¾ÙŠØ¯ÙŠØ§ Ù…ØµØ±Ù‰",
			language: "Egyptian Arabic",
		},
		af: {
			name: "Afrikaanse Wikipedia",
			language: "Afrikaans",
		},
		bs: {
			name: "Wikipedia na bosanskom jeziku",
			language: "Bosnian",
		},
		ceb: {
			name: "Wikipedya sa Sinugboanon",
			language: "Cebuano",
		},
		kn: {
			name: "à²•à²¨à³à²¨à²¡ à²µà²¿à²•à²¿à²ªà³€à²¡à²¿à²¯",
			language: "Kannada",
		},
		ha: {
			name: "Hausa Wikipedia",
			language: "Hausa",
		},
		nn: {
			name: "Nynorsk Wikipedia",
			language: "Norwegian (Nynorsk)",
		},
		is: {
			name: "Icelandic Wikipedia",
			language: "Icelandic",
		},
		la: {
			name: "Vicipaedia Latina",
			language: "Latin",
		},
		my: {
			name: "Burmese Wikipedia",
			language: "Burmese",
		},
		sw: {
			name: "Wikipedia ya Kiswahili",
			language: "Swahili",
		},
		ast: {
			name: "Asturian Wikipedia",
			language: "Asturian",
		},
		tl: {
			name: "Tagalog Wikipedia",
			language: "Tagalog",
		},
		"be-tarask": {
			name: "Ð‘ÐµÐ»Ð°Ñ€ÑƒÑÐºÐ°Ñ Ð’Ñ–ÐºÑ–Ð¿ÑÐ´Ñ‹Ñ",
			language: "Belarusian (TaraÅ¡kievica)",
		},
		jv: {
			name: "Javanese Wikipedia",
			language: "Javanese",
		},
		ba: {
			name: "Bashkir Wikipedia",
			language: "Bashkir",
		},
		as: {
			name: "à¦…à¦¸à¦®à§€à¦¯à¦¼à¦¾ à§±à¦¿à¦•à¦¿à¦ªà¦¿à¦¡à¦¿à¦¯à¦¼à¦¾",
			language: "Assamese",
		},
		ckb: {
			name: "ÙˆÛŒÚ©ÛŒÙ¾ÛŒØ¯ÛŒØ§ÛŒ Ú©ÙˆØ±Ø¯ÛŒ",
			language: "Kurdish (Sorani)",
		},
		azb: {
			name: "ØªÙˆØ±Ú©Ø¬Ù‡ ÙˆÛŒÚ©ÛŒâ€ŒÙ¾Ø¯ÛŒØ§",
			language: "Iran Azerbaijani",
		},
		si: {
			name: "Sinhalese Wikipedia",
			language: "Sinhalese",
		},
		cy: {
			name: "Welsh Wikipedia",
			language: "Welsh",
		},
		sco: {
			name: "Scots Wikipedia",
			language: "Scots",
		},
		ne: {
			name: "Nepali Wikipedia",
			language: "Nepali",
		},
		br: {
			name: "Breton Wikipedia",
			language: "Breton",
		},
		tt: {
			name: "Tatar Wikipedia",
			language: "Tatar",
		},
		als: {
			name: "Alemannic Wikipedia",
			language: "Alemannic",
		},
		ga: {
			name: "VicipÃ©id na Gaeilge",
			language: "Irish",
		},
		"zh-min-nan": {
			name: "Min Nan Wikipedia",
			language: "Southern Min /Min Nan",
		},
		oc: {
			name: "Occitan Wikipedia",
			language: "Occitan",
		},
		mn: {
			name: "ÐœÐ¾Ð½Ð³Ð¾Ð» Ð’Ð¸ÐºÐ¸Ð¿ÐµÐ´Ð¸Ð°",
			language: "Mongolian",
		},
		so: {
			name: "Somali Wikipedia",
			language: "Somali",
		},
		gu: {
			name: "Gujarati Wikipedia",
			language: "Gujarati",
		},
		pa: {
			name: "Eastern Punjabi Wikipedia",
			language: "Eastern Punjabi",
		},
		ky: {
			name: "Kyrgyz Wikipedia",
			language: "Kyrgyz",
		},
		war: {
			name: "Waray Wikipedia",
			language: "Waray",
		},
		an: {
			name: "Aragonese Wikipedia",
			language: "Aragonese",
		},
		ku: {
			name: "WÃ®kÃ®pediya kurdÃ®",
			language: "Kurdish (Kurmanji)",
		},
		dag: {
			name: "Dagbani Wikipedia",
			language: "Dagbani",
		},
		lb: {
			name: "Luxembourgish Wikipedia",
			language: "Luxembourgish",
		},
		tg: {
			name: "Tajik Wikipedia",
			language: "Tajik",
		},
		bar: {
			name: "Bavarian Wikipedia",
			language: "Bavarian",
		},
		km: {
			name: "Khmer Wikipedia",
			language: "Khmer",
		},
		"zh-classical": {
			name: "Classical Chinese Wikipedia",
			language: "Classical Chinese",
		},
		yo: {
			name: "Yoruba Wikipedia",
			language: "Yoruba",
		},
		su: {
			name: "Sundanese Wikipedia",
			language: "Sundanese",
		},
		min: {
			name: "Minangkabau Wikipedia",
			language: "Minangkabau",
		},
		ps: {
			name: "Pashto Wikipedia",
			language: "Pashto",
		},
		bcl: {
			name: "Central Bicolano Wikipedia",
			language: "Central Bikol",
		},
		pnb: {
			name: "Western Punjabi Wikipedia",
			language: "Western Punjabi",
		},
		nds: {
			name: "Low Saxon Wikipedia",
			language: "Low German",
		},
		tk: {
			name: "Turkmen Wikipedia",
			language: "Turkmen",
		},
		mg: {
			name: "Malagasy Wikipedia",
			language: "Malagasy",
		},
		fy: {
			name: "West Frisian Wikipedia",
			language: "West Frisian",
		},
		or: {
			name: "Odia Wikipedia",
			language: "Odia",
		},
		ang: {
			name: "Anglo-Saxon Wikipedia",
			language: "Old English /Anglo-Saxon",
		},
		hif: {
			name: "Fiji Hindi Wikipedia",
			language: "Fiji Hindi",
		},
		io: {
			name: "Ido Wikipedia",
			language: "Ido",
		},
		cv: {
			name: "Chuvash Wikipedia",
			language: "Chuvash",
		},
		ce: {
			name: "Chechen Wikipedia",
			language: "Chechen",
		},
		ht: {
			name: "Haitian Creole Wikipedia",
			language: "Haitian Creole",
		},
		lmo: {
			name: "Lombard Wikipedia",
			language: "Lombard",
		},
		wuu: {
			name: "Wu Wikipedia",
			language: "Wu",
		},
		am: {
			name: "Amharic Wikipedia",
			language: "Amharic",
		},
		ig: {
			name: "Igbo Wikipedia",
			language: "Igbo",
		},
		yi: {
			name: "Yiddish Wikipedia",
			language: "Yiddish",
		},
		qu: {
			name: "Quechua Wikipedia",
			language: "Quechua",
		},
		bh: {
			name: "Bhojpuri Wikipedia",
			language: "Bihari (Bhojpuri)",
		},
		ban: {
			name: "Balinese Wikipedia",
			language: "Balinese",
		},
		mzn: {
			name: "Mazandarani Wikipedia",
			language: "Mazanderani",
		},
		ary: {
			name: "Moroccan Arabic Wikipedia",
			language: "Moroccan Arabic",
		},
		sah: {
			name: "Sakha Wikipedia",
			language: "Yakut/Sakha",
		},
		ia: {
			name: "Interlingua Wikipedia",
			language: "Interlingua",
		},
		vec: {
			name: "Venetian Wikipedia",
			language: "Venetian",
		},
		ace: {
			name: "Acehnese Wikipedia",
			language: "Acehnese",
		},
		lo: {
			name: "Lao Wikipedia",
			language: "Lao",
		},
		scn: {
			name: "Sicilian Wikipedia",
			language: "Sicilian",
		},
		fo: {
			name: "Faroese Wikipedia",
			language: "Faroese",
		},
		sa: {
			name: "à¤¸à¤‚à¤¸à¥à¤•à¥ƒà¤¤à¤µà¤¿à¤•à¤¿à¤ªà¥€à¤¡à¤¿à¤¯à¤¾",
			language: "Sanskrit",
		},
		kw: {
			name: "Cornish Wikipedia",
			language: "Cornish",
		},
		diq: {
			name: "Zazaki Wikipedia",
			language: "Zazaki",
		},
		gn: {
			name: "Guarani Wikipedia",
			language: "Guarani",
		},
		sd: {
			name: "Ø³Ù†ÚŒÙŠ ÙˆÚªÙŠÙ¾ÙŠÚŠÙŠØ§",
			language: "Sindhi",
		},
		hyw: {
			name: "Western Armenian Wikipedia",
			language: "Westerm Armenian",
		},
		eml: {
			name: "Emilian-Romagnol Wikipedia",
			language: "Emilian- Romagnol",
		},
		ie: {
			name: "Interlingue Wikipedia",
			language: "Interlingue",
		},
		rw: {
			name: "Kinyarwanda Wikipedia",
			language: "Kinyarwanda",
		},
		mai: {
			name: "Maithili Wikipedia",
			language: "Maithili",
		},
		szl: {
			name: "Silesian Wikipedia",
			language: "Silesian",
		},
		vo: {
			name: "VÃ¼kiped VolapÃ¼kik",
			language: "VolapÃ¼k",
		},
		ay: {
			name: "Aymara Wikipedia",
			language: "Aymara",
		},
		sat: {
			name: "Santali Wikipedia",
			language: "Santali",
		},
		co: {
			name: "Corsican Wikipedia",
			language: "Corsican",
		},
		sc: {
			name: "Sardinian Wikipedia",
			language: "Sardinian",
		},
		xmf: {
			name: "Mingrelian Wikipedia",
			language: "Mingrelian",
		},
		new: {
			name: "Newar Wikipedia",
			language: "Newar/ Nepal Bhasa",
		},
		zu: {
			name: "Zulu Wikipedia",
			language: "Zulu",
		},
		hsb: {
			name: "Hornjoserbska wikipedija",
			language: "Upper Sorbian",
		},
		lij: {
			name: "Ligurian Wikipedia",
			language: "Ligurian",
		},
		"nds-nl": {
			name: "Dutch Low Saxon Wikipedia",
			language: "Dutch Low Saxon",
		},
		os: {
			name: "Ossetian Wikipedia",
			language: "Ossetian",
		},
		gd: {
			name: "Scottish Gaelic Wikipedia",
			language: "Scottish Gaelic",
		},
		ak: {
			name: "Akan Wikipedia",
			language: "Akan",
		},
		hak: {
			name: "Hakka Wikipedia",
			language: "Hakka",
		},
		vls: {
			name: "West Flemish Wikipedia",
			language: "West Flemish",
		},
		bi: {
			name: "Bislama Wikipedia",
			language: "Bislama",
		},
		frp: {
			name: "Franco-ProvenÃ§al Wikipedia",
			language: "Franco- ProvenÃ§al /Arpitan",
		},
		mt: {
			name: "Maltese Wikipedia",
			language: "Maltese",
		},
		nap: {
			name: "Neapolitan Wikipedia",
			language: "Neapolitan",
		},
		sn: {
			name: "Shona Wikipedia",
			language: "Shona",
		},
		vep: {
			name: "Veps Wikipedia",
			language: "Veps",
		},
		crh: {
			name: "Crimean Tatar Wikipedia",
			language: "Crimean Tatar",
		},
		"bat-smg": {
			name: "Samogitian Wikipedia",
			language: "Samogitian",
		},
		li: {
			name: "Limburgish Wikipedia",
			language: "Limburgish",
		},
		pms: {
			name: "Piedmontese Wikipedia",
			language: "Piedmontese",
		},
		ilo: {
			name: "Ilokano Wikipedia",
			language: "Ilokano",
		},
		ks: {
			name: "Kashmiri Wikipedia",
			language: "Kashmiri",
		},
		cdo: {
			name: "Min Dong Wikipedia",
			language: "Eastern Min /Min Dong",
		},
		nah: {
			name: "NÄhuatl Wikipedia",
			language: "Nahuatl",
		},
		bo: {
			name: "Tibetan Wikipedia",
			language: "Tibetan",
		},
		wa: {
			name: "Walloon Wikipedia",
			language: "Walloon",
		},
		pam: {
			name: "Kapampangan Wikipedia",
			language: "Kapampangan",
		},
		myv: {
			name: "Erzya Wikipedia",
			language: "Erzya",
		},
		mi: {
			name: "MÄori Wikipedia",
			language: "MÄori",
		},
		frr: {
			name: "North Frisian Wikipedia",
			language: "North Frisian",
		},
		bpy: {
			name: "à¦¬à¦¿à¦·à§à¦£à§à¦ªà§à¦°à¦¿à¦¯à¦¼à¦¾ à¦®à¦¨à¦¿à¦ªà§à¦°à§€ à¦‰à¦‡à¦•à¦¿à¦ªà¦¿à¦¡à¦¿à¦¯à¦¼à¦¾",
			language: "Bishnupriya Manipuri",
		},
		lad: {
			name: "Ladino Wikipedia",
			language: "Judaeo-Spanish /Ladino",
		},
		se: {
			name: "Northern Sami Wikipedia",
			language: "Northern Sami",
		},
		fur: {
			name: "Friulian Wikipedia",
			language: "Friulian",
		},
		gag: {
			name: "Gagauz Wikipedia",
			language: "Gagauz",
		},
		smn: {
			name: "Inari Sami Wikipedia",
			language: "Inari Sami",
		},
		pcd: {
			name: "Picard Wikipedia",
			language: "Picard",
		},
		udm: {
			name: "Udmurt Wikipedia",
			language: "Udmurt",
		},
		bug: {
			name: "Buginese Wikipedia",
			language: "Buginese",
		},
		avk: {
			name: "Kotava Wikipedia",
			language: "Kotava",
		},
		chr: {
			name: "Cherokee Wikipedia",
			language: "Cherokee",
		},
		gan: {
			name: "Gan Chinese Wikipedia",
			language: "Gan Chinese",
		},
		kv: {
			name: "Komi Wikipedia",
			language: "Komi",
		},
		mhr: {
			name: "Meadow Mari Wikipedia",
			language: "Meadow Mari",
		},
		tw: {
			name: "Twi Wikipedia",
			language: "Twi",
		},
		"fiu-vro": {
			name: "Voro Wikipedia",
			language: "VÃµro",
		},
		kab: {
			name: "Kabyle Wikipedia",
			language: "Kabyle",
		},
		mnw: {
			name: "á€á€³á€€á€³á€•á€³á€’á€³á€šá€¬á€™á€”á€º",
			language: "Mon",
		},
		tcy: {
			name: "Tulu Wikipedia",
			language: "Tulu",
		},
		ug: {
			name: "Uyghur Wikipedia",
			language: "Uyghur",
		},
		ab: {
			name: "Abkhazian Wikipedia",
			language: "Abkhaz",
		},
		ln: {
			name: "Lingala Wikipedia",
			language: "Lingala",
		},
		lfn: {
			name: "Lingua Franca Nova Wikipedia",
			language: "Lingua Franca Nova",
		},
		pap: {
			name: "Papiamentu Wikipedia",
			language: "Papiamento",
		},
		dty: {
			name: "Doteli Wikipedia",
			language: "Doteli",
		},
		dz: {
			name: "Dzongkha Wikipedia",
			language: "Dzongkha",
		},
		haw: {
			name: "Hawaiian Wikipedia",
			language: "Hawaiian",
		},
		gv: {
			name: "Manx Wikipedia",
			language: "Manx",
		},
		rue: {
			name: "Rusyn Wikipedia",
			language: "Rusyn",
		},
		bjn: {
			name: "Banjar Wikipedia",
			language: "Banjar",
		},
		"map-bms": {
			name: "Banyumasan Wikipedia",
			language: "Banyumasan",
		},
		cu: {
			name: "Old Church Slavonic Wikipedia",
			language: "Old Church Slavonic",
		},
		szy: {
			name: "Sakizaya Wikipedia",
			language: "Sakizaya",
		},
		bxr: {
			name: "Buryat Wikipedia",
			language: "Buryat",
		},
		ny: {
			name: "Chichewa Wikipedia",
			language: "Chewa",
		},
		dv: {
			name: "Divehi Wikipedia",
			language: "Dhivehi",
		},
		gor: {
			name: "Gorontalo Wikipedia",
			language: "Gorontalo",
		},
		kl: {
			name: "Greenlandic Wikipedia",
			language: "Greenlandic",
		},
		rn: {
			name: "Kirundi Wikipedia",
			language: "Kirundi",
		},
		lld: {
			name: "Ladin Wikipedia",
			language: "Ladin",
		},
		"cbk-zam": {
			name: "Zamboanga Chavacano Wikipedia",
			language: "Zamboanga Chavacano",
		},
		ext: {
			name: "Extremaduran Wikipedia",
			language: "Extremaduran",
		},
		ksh: {
			name: "Ripuarian Wikipedia",
			language: "Ripuarian",
		},
		ady: {
			name: "Adyghe Wikipedia",
			language: "Adyghe",
		},
		av: {
			name: "Avar Wikipedia",
			language: "Avar",
		},
		ch: {
			name: "Chamorro Wikipedia",
			language: "Chamorro",
		},
		chy: {
			name: "Cheyenne Wikipedia",
			language: "Cheyenne",
		},
		cr: {
			name: "Cree Wikipedia",
			language: "Cree",
		},
		dsb: {
			name: "Dolnoserbska wikipedija",
			language: "Lower Sorbian",
		},
		kbp: {
			name: "Kabiye Wikipedia",
			language: "Kabiye",
		},
		csb: {
			name: "Kashubian Wikipedia",
			language: "Kashubian",
		},
		kg: {
			name: "Kongo Wikipedia",
			language: "Kongo",
		},
		jbo: {
			name: "Lojban Wikipedia",
			language: "Lojban",
		},
		mwl: {
			name: "Mirandese Wikipedia",
			language: "Mirandese",
		},
		pdc: {
			name: "Pennsylvania German Wikipedia",
			language: "Pennsylvania German",
		},
		rm: {
			name: "Romansh Wikipedia",
			language: "Romansh",
		},
		shi: {
			name: "Shilha Wikipedia",
			language: "Shilha",
		},
		"roa-rup": {
			name: "Wikipedia pi armÃ£neashti",
			language: "Aromanian",
		},
		iu: {
			name: "Inuktitut Wikipedia",
			language: "Inuktitut",
		},
		mad: {
			name: "Madurese Wikipedia",
			language: "Madurese",
		},
		nov: {
			name: "Novial Wikipedia",
			language: "Novial",
		},
		arc: {
			name: "Syriac Wikipedia",
			language: "Aramaic",
		},
		tpi: {
			name: "Tok Pisin Wikipedia",
			language: "Tok Pisin",
		},
		ts: {
			name: "Tsonga Wikipedia",
			language: "Tsonga",
		},
		tyv: {
			name: "Tuvinian Wikipedia",
			language: "Tuvan",
		},
		zea: {
			name: "Zealandic Wikipedia",
			language: "Zeelandic",
		},
		shn: {
			name: "á€á€®á‚‡á¶á€®á‚‡á½á€®á€¸á€á€®á€¸á€šá‚ƒá€¸á€á‚†á€¸",
			language: "Shan",
		},
		glk: {
			name: "Gilaki Wikipedia",
			language: "Gilaki",
		},
		mrj: {
			name: "Hill Mari Wikipedia",
			language: "Hill Mari",
		},
		na: {
			name: "Nauruan Wikipedia",
			language: "Nauruan",
		},
		nv: {
			name: "Navajo Wikipedia",
			language: "Navajo",
		},
		nrm: {
			name: "Norman Wikipedia",
			language: "Norman",
		},
		sm: {
			name: "Samoan Wikipedia",
			language: "Samoan",
		},
		tet: {
			name: "Tetum Wikipedia",
			language: "Tetum",
		},
		bm: {
			name: "Bambara Wikipedia",
			language: "Bambara",
		},
		pag: {
			name: "Pangasinan Wikipedia",
			language: "Pangasinan",
		},
		wo: {
			name: "Wolof Wikipedia",
			language: "Wolof",
		},
		awa: {
			name: "Awadhi Wikipedia",
			language: "Awadhi",
		},
		ff: {
			name: "Fula Wikipedia",
			language: "Fula",
		},
		got: {
			name: "Gothic Wikipedia",
			language: "Gothic",
		},
		inh: {
			name: "Ingush Wikipedia",
			language: "Ingush",
		},
		krc: {
			name: "Karachay-Balkar Wikipedia",
			language: "Karachay- Balkar",
		},
		kaa: {
			name: "Karakalpak Wikipedia",
			language: "Karakalpak",
		},
		lbe: {
			name: "Lak Wikipedia",
			language: "Lak",
		},
		lez: {
			name: "Lezgi Wikipedia",
			language: "Lezgian",
		},
		pih: {
			name: "Norfolk Wikipedia",
			language: "Norfolk",
		},
		xh: {
			name: "Xhosa Wikipedia",
			language: "Xhosa",
		},
		fj: {
			name: "Fijian Wikipedia",
			language: "Fijian",
		},
		jam: {
			name: "Jamaican Wikipedia",
			language: "Jamaican Patois",
		},
		kbd: {
			name: "Kabardian Wikipedia",
			language: "Kabardian",
		},
		xal: {
			name: "Kalmyk Wikipedia",
			language: "Kalmyk",
		},
		om: {
			name: "Oromo Wikipedia",
			language: "Oromo",
		},
		ss: {
			name: "Swati Wikipedia",
			language: "Swazi",
		},
		tn: {
			name: "Tswana Wikipedia",
			language: "Tswana",
		},
		rmy: {
			name: "Vlax Romani Wikipedia",
			language: "Vlax Romani",
		},
		gom: {
			name: "Konkani Wikipedia",
			language: "Konkani",
		},
		din: {
			name: "Dinka Wikipedia",
			language: "Dinka",
		},
		ee: {
			name: "Ewe Wikipedia",
			language: "Ewe",
		},
		ik: {
			name: "Inupiak Wikipedia",
			language: "Inupiaq",
		},
		olo: {
			name: "Livvi-Karelian Wikipedia",
			language: "Livvi-Karelian",
		},
		mdf: {
			name: "Moksha Wikipedia",
			language: "Moksha",
		},
		nqo: {
			name: "N'Ko Wikipedia",
			language: "N'Ko",
		},
		"roa-tara": {
			name: "Tarantino Wikipedia",
			language: "Tarantino",
		},
		ti: {
			name: "Tigrinya Wikipedia",
			language: "Tigrinya",
		},
		lg: {
			name: "Luganda Wikipedia",
			language: "Luganda",
		},
		nia: {
			name: "Nias Wikipedia",
			language: "Nias",
		},
		koi: {
			name: "Komi-Permyak Wikipedia",
			language: "Komi-Permyak",
		},
		ltg: {
			name: "Latgalian Wikipedia",
			language: "Latgalian",
		},
		pnt: {
			name: "Pontic Wikipedia",
			language: "Pontic Greek",
		},
		to: {
			name: "Tongan Wikipedia",
			language: "Tongan",
		},
		za: {
			name: "Zhuang Wikipedia",
			language: "Zhuang",
		},
		skr: {
			name: "Saraiki Wikipedia",
			language: "Saraiki",
		},
		ki: {
			name: "Kikuyu Wikipedia",
			language: "Kikuyu",
		},
		stq: {
			name: "Saterland Frisian Wikipedia",
			language: "Saterland Frisian",
		},
		st: {
			name: "Sesotho Wikipedia",
			language: "Sotho",
		},
		ty: {
			name: "Tahitian Wikipedia",
			language: "Tahitian",
		},
		atj: {
			name: "Atikamekw Wikipedia",
			language: "Atikamekw",
		},
		nso: {
			name: "Northern Sotho Wikipedia",
			language: "Northern Sotho",
		},
		pi: {
			name: "Pali Wikipedia",
			language: "Pali",
		},
		srn: {
			name: "Sranan Tongo Wikipedia",
			language: "Sranan Tongo",
		},
		ve: {
			name: "Venda Wikipedia",
			language: "Venda",
		},
		gcr: {
			name: "Guianan Creole Wikipedia",
			language: "Guianan Creole",
		},
		pfl: {
			name: "Palatine German Wikipedia",
			language: "Palatine German",
		},
		sg: {
			name: "Sango Wikipedia",
			language: "Sango",
		},
		tum: {
			name: "Tumbuku Wikipedia",
			language: "Tumbuka",
		},
		"ng (closed)": {
			name: "Ndonga Wikipedia (closed)",
			language: "Ndonga",
		},
		"lrc (locked)": {
			name: "Northern Luri Wikipedia (locked)",
			language: "Northern Luri",
		},
		"ii (closed)": {
			name: "Sichuan Yi Wikipedia (closed)",
			language: "Nuosu/Sichuan Yi",
		},
		"aa (closed)": {
			name: "Afar Wikipedia (closed)",
			language: "Afar",
		},
		"cho (closed)": {
			name: "Choctaw Wikipedia (closed)",
			language: "Choctaw",
		},
		"hz (closed)": {
			name: "Herero Wikipedia (closed)",
			language: "Herero",
		},
		"ho (closed)": {
			name: "Hiri Motu Wikipedia (closed)",
			language: "Hiri Motu",
		},
		"kr (closed)": {
			name: "Kanuri Wikipedia (closed)",
			language: "Kanuri",
		},
		"kj (closed)": {
			name: "Kuanyama Wikipedia (closed)",
			language: "Kuanyama",
		},
		"mh (closed)": {
			name: "Marshallese Wikipedia (closed)",
			language: "Marshallese",
		},
		"mus (closed)": {
			name: "Muscogee Wikipedia (closed)",
			language: "Muscogee",
		},
		"mo (deleted)": {
			name: "Moldovan Wikipedia (deleted)",
			language: "Moldovan",
		},
		nostalgia: {
			name: "Nostalgia Wikipedia",
			language: "English",
		},
	},
};

export default Languages;
