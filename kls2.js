(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"kls2_atlas_1", frames: [[743,1725,474,168],[1219,1725,254,166],[954,1398,650,185],[0,1516,419,162],[743,1585,663,138],[954,1082,932,156],[1606,1398,301,334],[954,1240,910,156],[440,1446,301,334],[743,1446,200,90],[0,0,1920,1080],[0,1082,438,432],[440,1082,512,362],[0,1680,369,138]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_20 = function() {
	this.initialize(ss["kls2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["kls2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["kls2_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["kls2_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["kls2_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["kls2_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["kls2_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["kls2_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["kls2_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(img.CachedBmp_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2231,154);


(lib.bar1 = function() {
	this.initialize(ss["kls2_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.birutoscahd = function() {
	this.initialize(ss["kls2_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.IMG_20240813_085601removebg = function() {
	this.initialize(img.IMG_20240813_085601removebg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4608,2592);


(lib.SD = function() {
	this.initialize(ss["kls2_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.selesai = function() {
	this.initialize(ss["kls2_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.waktuhabis = function() {
	this.initialize(ss["kls2_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tombol_mulai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(-78.15,-29.8,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// Layer_1
	this.instance_1 = new lib.bar1();
	this.instance_1.setTransform(-100,-45);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AvnnBIfPAAIAAODI/PAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AvnHCIAAuDIfPAAIAAODg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CE41").s().p("AvnHCIAAuDIfPAAIAAODg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-46,202,92);


(lib.timerMC2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#15B621").s().p("AidETQgjgVgfgeQgegfgUgiQgqhHAAhYQAAhXAqhGQAUgjAegeQAfgfAjgUQBHgqBWAAQBYAABHAqQAiAUAfAfQAeAeAUAjQAqBGAABXQAABXgqBHQgUAjgeAfQgfAegiAUQhHAqhYAAQhWAAhHgpg");
	this.shape.setTransform(-0.05,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai1E8QgogXgjgjQgjgjgYgoQgwhSAAhlQAAhkAwhSQAYgnAjgjQAjgjAogYQBRgwBkAAQBlAABSAwQAoAYAjAjQAjAjAXAnQAwBSAABkQAABlgwBSQgXAogjAjQgjAjgoAXQhRAwhmAAQhkAAhRgwgAidkRQgjAUgfAfQgeAegVAjQgpBGAABXQAABYApBHQAVAiAeAfQAfAeAjAVQBGApBXAAQBYAABHgqQAigUAegeQAfgfAUgjQAqhHAAhXQAAhXgqhGQgUgjgfgeQgegfgjgUQhGgqhYAAQhWAAhHAqg");
	this.shape_1.setTransform(-0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A72312").s().p("AjUFyQgvgbgqgpQgogpgcgvQg4hgAAh2QAAh1A4hfQAcgvAogpQAqgpAvgcQBfg4B1AAQB2AABfA4QAvAcApApQApApAcAvQA4BfAAB1QAAB2g4BgQgcAvgpApQgpApguAbQhfA4h3AAQh1AAhfg4gAi1k7QgoAYgjAjQgkAjgXAoQgxBRAABkQAABlAxBSQAXAoAkAjQAjAjAoAXQBRAwBkAAQBlAABSgwQAogXAigjQAkgjAXgoQAwhSAAhlQAAhkgwhRQgXgogkgjQgjgjgngYQhSgvhlgBQhkABhRAvg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#15B621").s().p("AidETQgjgVgfgeQgegfgUgiQgqhHAAhYQAAhXAqhGQAUgjAegeQAfgfAjgUQBHgqBWAAIAAE7IABAAIAAAAICekRQAiAUAfAfQAeAeAUAjQAqBGAABXQAABXgqBHQgUAjgeAfQgfAegiAUQhHAqhYAAQhWAAhHgpg");
	this.shape_3.setTransform(-0.05,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A72312").s().p("AjUFyQgvgbgqgpQgogpgcgvQg4hgAAh2QAAh1A4hfQAcgvAogpQAqgpAvgcQBfg4B1AAQB2AABfA4QAvAcApApQApApAcAvQA4BfAAB1QAAB2g4BgQgcAvgpApQgpApguAbQhfA4h3AAQh1AAhfg4gAi1k7QgoAYgjAjQgkAjgXAoQgxBRAABkQAABlAxBSQAXAoAkAjQAjAjAoAXQBRAwBkAAQBlAABSgwQAogXAigjQAkgjAXgoQAwhSAAhlQAAhkgwhRQgXgogkgjQgjgjgngYQhSgvhlgBQhkABhRAvgAAAAAIAAAAIAAk7QBYABBGApIidERg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#15B621").s().p("AidETQgjgVgfgeQgegfgUgiQgqhHAAhYQAAhXAqhGQAUgjAegeQAfgfAjgUQBHgqBWAAIAAE7IABAAIAAAAIERidQAqBGAABXQAABXgqBHQgUAjgeAfQgfAegiAUQhHAqhYAAQhWAAhHgpg");
	this.shape_5.setTransform(-0.05,0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A72312").s().p("AjUFyQgvgbgqgpQgogpgcgvQg4hgAAh2QAAh1A4hfQAcgvAogpQAqgpAvgcQBfg4B1AAQB2AABfA4QAvAcApApQApApAcAvQA4BfAAB1QAAB2g4BgQgcAvgpApQgpApguAbQhfA4h3AAQh1AAhfg4gAi1k7QgoAYgjAjQgkAjgXAoQgxBRAABkQAABlAxBSQAXAoAkAjQAjAjAoAXQBRAwBkAAQBlAABSgwQAogXAigjQAkgjAXgoQAwhSAAhlQAAhkgwhRQgXgogkgjQgjgjgngYQhSgvhlgBQhkABhRAvgAAAAAIAAAAIAAk7QBYABBGApQAjAVAeAeQAfAeAUAjIkRCdg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#15B621").s().p("AidETQgjgVgfgeQgegfgUgiQgqhHAAhYQAAhXAqhGQAUgjAegeQAfgfAjgUQBHgqBWAAIAAE7IABAAIE7AAQAABXgqBHQgUAjgeAfQgfAegiAUQhHAqhYAAQhWAAhHgpg");
	this.shape_7.setTransform(-0.05,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A72312").s().p("AjUFyQgvgbgqgpQgogpgcgvQg4hgAAh2QAAh1A4hfQAcgvAogpQAqgpAvgcQBfg4B1AAQB2AABfA4QAvAcApApQApApAcAvQA4BfAAB1QAAB2g4BgQgcAvgpApQgpApguAbQhfA4h3AAQh1AAhfg4gAi1k7QgoAYgjAjQgkAjgXAoQgxBRAABkQAABlAxBSQAXAoAkAjQAjAjAoAXQBRAwBkAAQBlAABSgwQAogXAigjQAkgjAXgoQAwhSAAhlQAAhkgwhRQgXgogkgjQgjgjgngYQhSgvhlgBQhkABhRAvgAAAAAIAAAAIAAk7QBYABBGApQAjAVAeAeQAfAeAUAjQAqBGAABXg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#15B621").s().p("AiIETQgjgVgfgeQgegfgVgiQgphHAAhYQAAhXAphGQAVgjAegeQAfgfAjgUQBHgqBWAAIAAE7IABAAIAAAAIAAAAIERCeQgUAjgfAfQgeAegiAUQhHAqhYAAQhXAAhGgpg");
	this.shape_9.setTransform(-2.125,0.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A72312").s().p("AjUFyQgvgbgqgpQgogpgcgvQg4hgAAh2QAAh1A4hfQAcgvAogpQAqgpAvgcQBfg4B1AAQB2AABfA4QAvAcApApQApApAcAvQA4BfAAB1QAAB2g4BgQgcAvgpApQgpApguAbQhfA4h3AAQh1AAhfg4gAi1k7QgoAYgjAjQgkAjgXAoQgxBRAABkQAABlAxBSQAXAoAkAjQAjAjAoAXQBRAwBkAAQBlAABSgwQAogXAigjQAkgjAXgoQAwhSAAhlQAAhkgwhRQgXgogkgjQgjgjgngYQhSgvhlgBQhkABhRAvgAAAAAIABAAIgBAAIAAAAIAAk7QBYABBGApQAjAVAeAeQAfAeAUAjQAqBGAABXQAABYgqBGg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#15B621").s().p("AhOETQgjgVgfgeQgegfgVgiQgphHgBhYQABhXAphGQAVgjAegeQAfgfAjgUQBGgqBXAAIAAE7IAAAAIABAAIgBAAICeESQhGAqhYAAQhXAAhGgpg");
	this.shape_11.setTransform(-7.9,0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A72312").s().p("AjUFyQgvgbgqgpQgogpgcgvQg4hgAAh2QAAh1A4hfQAcgvAogpQAqgpAvgcQBfg4B1AAQB2AABfA4QAvAcApApQApApAcAvQA4BfAAB1QAAB2g4BgQgcAvgpApQgpApguAbQhfA4h3AAQh1AAhfg4gAi1k7QgoAYgjAjQgkAjgXAoQgxBRAABkQAABlAxBSQAXAoAkAjQAjAjAoAXQBRAwBkAAQBlAABSgwQAogXAigjQAkgjAXgoQAwhSAAhlQAAhkgwhRQgXgogkgjQgjgjgngYQhSgvhlgBQhkABhRAvgAAAAAIABAAIgBAAIAAAAIAAk7QBYABBGApQAjAVAeAeQAfAeAUAjQAqBGAABXQAABYgqBGQgUAjgfAfQgeAegjAUg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#15B621").s().p("AAAETQgigVgfgeQgegfgVgiQgqhHAAhYQAAhXAqhGQAUgjAfgeQAfgfAigUQBGgqBYAAIAAE7IAAAAIABAAIgBAAIAAAAIAAE8QhYAAhGgpg");
	this.shape_13.setTransform(-15.7875,0.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A72312").s().p("AjUFyQgvgbgqgpQgogpgcgvQg4hgAAh2QAAh1A4hfQAcgvAogpQAqgpAvgcQBfg4B1AAQB2AABfA4QAvAcApApQApApAcAvQA4BfAAB1QAAB2g4BgQgcAvgpApQgpApguAbQhfA4h3AAQh1AAhfg4gAi1k7QgoAYgjAjQgkAjgXAoQgxBRAABkQAABlAxBSQAXAoAkAjQAjAjAoAXQBRAwBkAAQBlAABSgwQAogXAigjQAkgjAXgoQAwhSAAhlQAAhkgwhRQgXgogkgjQgjgjgngYQhSgvhlgBQhkABhRAvgAAAABIAAgBIABAAIgBAAIAAAAIAAk7QBYABBGApQAjAVAeAeQAfAeAUAjQAqBGAABXQAABYgqBGQgUAjgfAfQgeAegjAUQhGAqhYAAg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#15B621").s().p("AhBD0QgegegVgjQgqhHAAhYQAAhXAqhGQAUgjAfgeQAfgfAigUQBGgpBYAAIAAE6IAAAAIABAAIgBABIAAAAIieESQgigUgfgfg");
	this.shape_15.setTransform(-15.7875,-2.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A72312").s().p("AjUFyQgvgbgqgpQgogpgcgvQg4hgAAh2QAAh1A4hfQAcgvAogpQAqgpAvgcQBfg4B1AAQB2AABfA4QAvAcApApQApApAcAvQA4BfAAB1QAAB2g4BgQgcAvgpApQgpApguAbQhfA4h3AAQh1AAhfg4gAi1k7QgoAYgjAjQgkAjgXAoQgxBRAABkQAABlAxBSQAXAoAkAjQAjAjAoAXQBRAwBkAAQBlAABSgwQAogXAigjQAkgjAXgoQAwhSAAhlQAAhkgwhRQgXgogkgjQgjgjgngYQhSgvhlgBQhkABhRAvgAidETICdkSIAAgBIABAAIgBAAIAAAAIAAk7QBYABBGApQAjAVAeAeQAfAeAUAjQAqBGAABXQAABYgqBGQgUAjgfAfQgeAegjAUQhGAqhYAAQhXAAhGgpg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#15B621").s().p("AieBOQAAhXAqhGQAUgjAfgeQAfgfAigUQBGgpBYAAIAAE6IAAAAIABAAIgBABIAAAAIkSCeQgqhHAAhYg");
	this.shape_17.setTransform(-15.7875,-7.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A72312").s().p("AjUFyQgvgbgqgpQgogpgcgvQg4hgAAh2QAAh1A4hfQAcgvAogpQAqgpAvgcQBfg4B1AAQB2AABfA4QAvAcApApQApApAcAvQA4BfAAB1QAAB2g4BgQgcAvgpApQgpApguAbQhfA4h3AAQh1AAhfg4gAi1k7QgoAYgjAjQgkAjgXAoQgxBRAABkQAABlAxBSQAXAoAkAjQAjAjAoAXQBRAwBkAAQBlAABSgwQAogXAigjQAkgjAXgoQAwhSAAhlQAAhkgwhRQgXgogkgjQgjgjgngYQhSgvhlgBQhkABhRAvgAidETQgjgVgfgeQgegegVgjIESieIAAgBIABAAIgBAAIAAAAIAAk7QBYABBGApQAjAVAeAeQAfAeAUAjQAqBGAABXQAABYgqBGQgUAjgfAfQgeAegjAUQhGAqhYAAQhXAAhGgpg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#15B621").s().p("ACeCeIgBAAIk7AAQAAhYAqhGQAUgiAfgfQAfgeAigVQBGgpBYAAIAAE6IAAABIABAAIgBAAIAAAAg");
	this.shape_19.setTransform(-15.7875,-15.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A72312").s().p("AjUFyQgvgbgqgpQgogpgcgvQg4hgAAh2QAAh1A4hfQAcgvAogpQAqgpAvgcQBfg4B1AAQB2AABfA4QAvAcApApQApApAcAvQA4BfAAB1QAAB2g4BgQgcAvgpApQgpApguAbQhfA4h3AAQh1AAhfg4gAi1k7QgoAYgjAjQgkAjgXAoQgxBRAABkQAABlAxBSQAXAoAkAjQAjAjAoAXQBRAwBkAAQBlAABSgwQAogXAigjQAkgjAXgoQAwhSAAhlQAAhkgwhRQgXgogkgjQgjgjgngYQhSgvhlgBQhkABhRAvgAidETQgjgVgfgeQgegegVgjQgphHgBhYIE8AAIAAAAIAAABIAAgBIABAAIgBAAIAAAAIAAk7QBYABBGApQAjAVAeAeQAfAeAUAjQAqBGAABXQAABYgqBGQgUAjgfAfQgeAegjAUQhGAqhYAAQhXAAhGgpg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#15B621").s().p("ACJCeIkSieQAVgiAegfQAfgeAjgVQBFgpBYAAIAAE6IAAABIABAAIgBAAIAAAAg");
	this.shape_21.setTransform(-13.7,-15.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A72312").s().p("AjUFyQgvgbgqgpQgogpgcgvQg4hgAAh2QAAh1A4hfQAcgvAogpQAqgpAvgcQBfg4B1AAQB2AABfA4QAvAcApApQApApAcAvQA4BfAAB1QAAB2g4BgQgcAvgpApQgpApguAbQhfA4h3AAQh1AAhfg4gAi1k7QgoAYgjAjQgkAjgXAoQgxBRAABkQAABlAxBSQAXAoAkAjQAjAjAoAXQBRAwBkAAQBlAABSgwQAogXAigjQAkgjAXgoQAwhSAAhlQAAhkgwhRQgXgogkgjQgjgjgngYQhSgvhlgBQhkABhRAvgAidETQgjgVgfgeQgegegVgjQgphHgBhYQABhXAphGIESCdIAAABIAAgBIABAAIgBAAIAAAAIAAk7QBYABBGApQAjAVAeAeQAfAeAUAjQAqBGAABXQAABYgqBGQgUAjgfAfQgeAegjAUQhGAqhYAAQhXAAhGgpg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#15B621").s().p("ABPCeIgBAAIABAAIAAgBIidkRQBGgpBXAAIAAE6IAAABIAAAAIAAAAIAAAAg");
	this.shape_23.setTransform(-7.8625,-15.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A72312").s().p("AjUFyQgvgbgqgpQgogpgcgvQg4hgAAh2QAAh1A4hfQAcgvAogpQAqgpAvgcQBfg4B1AAQB2AABfA4QAvAcApApQApApAcAvQA4BfAAB1QAAB2g4BgQgcAvgpApQgpApguAbQhfA4h3AAQh1AAhfg4gAi1k7QgoAYgjAjQgkAjgXAoQgxBRAABkQAABlAxBSQAXAoAkAjQAjAjAoAXQBRAwBkAAQBlAABSgwQAogXAigjQAkgjAXgoQAwhSAAhlQAAhkgwhRQgXgogkgjQgjgjgngYQhSgvhlgBQhkABhRAvgAidETQgjgVgfgeQgegegVgjQgphHgBhYQABhXAphGQAVgjAegeQAfgfAjgUICdERIAAAAIAAAAIAAAAIAAABIAAgBIABAAIgBAAIAAAAIAAk7QBYABBGApQAjAVAeAeQAfAeAUAjQAqBGAABXQAABYgqBGQgUAjgfAfQgeAegjAUQhGAqhYAAQhXAAhGgpg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#15B621").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIABAAIgBAAIAAABg");
	this.shape_25.setTransform(0.0125,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A72312").s().p("AjUFyQgvgbgqgpQgogpgcgvQg4hgAAh2QAAh1A4hfQAcgvAogpQAqgpAvgcQBfg4B1AAQB2AABfA4QAvAcApApQApApAcAvQA4BfAAB1QAAB2g4BgQgcAvgpApQgpApguAbQhfA4h3AAQh1AAhfg4gAi1k7QgoAYgjAjQgkAjgXAoQgxBRAABkQAABlAxBSQAXAoAkAjQAjAjAoAXQBRAwBkAAQBlAABSgwQAogXAigjQAkgjAXgoQAwhSAAhlQAAhkgwhRQgXgogkgjQgjgjgngYQhSgvhlgBQhkABhRAvgAidETQgjgVgfgeQgegegVgjQgphHgBhYQABhXAphGQAVgjAegeQAfgfAjgUQBGgqBXAAQBYABBGApQAjAVAeAeQAfAeAUAjQAqBGAABXQAABYgqBGQgUAjgfAfQgeAegjAUQhGAqhYAAQhXAAhGgpgAAAAAIAAABIAAgBIABAAIgBAAIAAAAIAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_1},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_1},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_1},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_1},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_1},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_1},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_1},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_1},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_1},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_1},{t:this.shape_25}]},1).wait(1));

	// Layer_2
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(-38.75,-44.6,0.3042,0.3042);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.6,-44.6,85.2,87.2);


(lib.sensorTombol = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("AtKELIAAoVIaVAAIAAIVg");
	this.shape.setTransform(84.3,26.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AtKELIAAoVIaVAAIAAIVg");
	this.shape_1.setTransform(84.3,26.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168.6,53.5);


(lib.jawabanMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.jawaban_txt = new cjs.Text("jawaban", "30px 'DengXian'");
	this.jawaban_txt.name = "jawaban_txt";
	this.jawaban_txt.textAlign = "center";
	this.jawaban_txt.lineHeight = 33;
	this.jawaban_txt.lineWidth = 342;
	this.jawaban_txt.parent = this;
	this.jawaban_txt.setTransform(0.65,-13.1);

	this.timeline.addTween(cjs.Tween.get(this.jawaban_txt).wait(3));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996600").s().p("A5vF9QjIABAAjIIAAlrQAAjHDIgBMAzfAAAQDIABAADHIAAFrQAADIjIgBgA7th0IAADqQAAC+C+AAMAxgAAAQC+AAAAi+IAAjqQAAi/i+AAMgxgAAAQi+AAAAC/g");
	this.shape.setTransform(1.1,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("A4XEYQi6AAAAi6IAAi6QAAi7C6AAMAwvAAAQC6AAAAC7IAAC6QAAC6i6AAg");
	this.shape_1.setTransform(1.125,1.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A4vE0Qi+AAAAi+IAAjrQAAi+C+AAMAxfAAAQC+AAAAC+IAADrQAAC+i+AAgA7RhcIAAC6QAAC6C6AAMAwvAAAQC6AAAAi6IAAi6QAAi7i6AAMgwvAAAQi6AAAAC7g");
	this.shape_2.setTransform(1.125,1.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#174F0C").s().p("A5vF9QjIABAAjIIAAlrQAAjHDIgBMAzfAAAQDIABAADHIAAFrQAADIjIgBgA7th0IAADqQAAC+C+AAMAxgAAAQC+AAAAi+IAAjqQAAi/i+AAMgxgAAAQi+AAAAC/g");
	this.shape_3.setTransform(1.1,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#42BE22").s().p("A4XEYQi6AAAAi6IAAi6QAAi7C6AAMAwvAAAQC6AAAAC7IAAC6QAAC6i6AAgA5Hi9QgYAZAbgcIAKgJIgNAMg");
	this.shape_4.setTransform(1.125,1.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4F0A0A").s().p("A5vF9QjIABAAjIIAAlrQAAjHDIgBMAzfAAAQDIABAADHIAAFrQAADIjIgBgA7th0IAADqQAAC+C+AAMAxgAAAQC+AAAAi+IAAjqQAAi/i+AAMgxgAAAQi+AAAAC/g");
	this.shape_5.setTransform(1.1,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AD1818").s().p("A4XEYQi6AAAAi6IAAi6QAAi7C6AAMAwvAAAQC6AAAAC7IAAC6QAAC6i6AAg");
	this.shape_6.setTransform(1.125,1.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_2},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.7,-36.2,369.6,76.30000000000001);


(lib.hasilKuisMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(-137.55,50.15,0.3125,0.3125);

	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(-39.15,-70.2,0.3125,0.3125);

	this.instance_2 = new lib.CachedBmp_15();
	this.instance_2.setTransform(-141.15,49.25,0.3125,0.3125);

	this.instance_3 = new lib.CachedBmp_14();
	this.instance_3.setTransform(-39.15,-70.2,0.3125,0.3125);

	this.instance_4 = new lib.CachedBmp_16();
	this.instance_4.setTransform(-92.05,58.3,0.3125,0.3125);

	this.instance_5 = new lib.waktuhabis();
	this.instance_5.setTransform(-151,-73,0.8287,0.8505);

	this.instance_6 = new lib.CachedBmp_17();
	this.instance_6.setTransform(-63.55,52,0.3125,0.3125);

	this.instance_7 = new lib.selesai();
	this.instance_7.setTransform(-100,-82,0.4059,0.3551);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_7},{t:this.instance_6}]},1).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("EghrAPvIAA/dMBDXAAAIAAfdg");
	this.shape.setTransform(0.75,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00C85C").s().p("EgmtATLMAAAgmVMBNbAAAMAAAAmVgEghjAPrMBDXAAAIAA/dMhDXAAAg");
	this.shape_1.setTransform(0,3.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(4));

	// Layer_1
	this.instance_8 = new lib.CachedBmp_18();
	this.instance_8.setTransform(-93.3,-33,0.3125,0.3125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.8,-119.1,495.6,245.39999999999998);


(lib.btntombolhijau = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkyAaIBphoIB1B0IEekdIBpBpImHGGg");
	this.shape.setTransform(2.875,-2.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkpHPQhvAAhQhQQhPhPAAhvIAAmBQAAhvBPhPQBQhQBvAAIJSAAQBxAABPBQQBPBPgBBvIAAGBQABBvhPBPQhPBQhxAAgAnWltQhOBNAABwIAAFbQACBsBMBLQBPBOBuAAIIzAAQBvAABOhOQBNhMABhrIAAlbQAAhvhOhOQhOhPhvAAIozAAQhuAAhPBPg");
	this.shape_1.setTransform(-0.1,-2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#158A0A").s().p("AlKIYQh8AAhYhYQhYhYAAh8IAAnXQAAh8BYhYQBYhYB8AAIKVAAQB8AABYBYQBYBYAAB8IAAHXQAAB8hYBYQhYBYh8AAgAnpmbQhPBPAABwIAAGAQAABwBPBPQBQBPBvAAIJSAAQBwAABPhPQBPhPAAhwIAAmAQAAhwhPhPQhPhPhwAAIpSAAQhvAAhQBPg");
	this.shape_2.setTransform(0.025,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8AEF80").s().p("AlcApQgRAAgMgMQgMgMAAgRIAAAAQAAgQAMgMQANgMAQAAIK5AAQARAAALAMQAMAMABAQIAAAAQgBASgMALQgKAMgSAAg");
	this.shape_3.setTransform(-2.7,-39.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2BDB1A").s().p("AkZG2QhuAAhPhOQhMhLgChrIAAlcQAAhvBOhOQBPhOBuAAIIzAAQBvAABOBOQBOBOAABvIAAFcQgCBqhMBMQhOBOhvAAgAmTmGQgMAMAAARIAAAAQAAARAMAMQAMAMARAAIK5AAQARAAALgMQAMgLAAgSIAAAAQAAgRgMgMQgLgMgRAAIq5AAQgRAAgMAMg");
	this.shape_4.setTransform(-0.075,-3.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.1,-53.5,126.30000000000001,107.1);


(lib.popupMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.pesanTxt = new cjs.Text("Popup", "bold 50px 'Calibri'");
	this.pesanTxt.name = "pesanTxt";
	this.pesanTxt.textAlign = "center";
	this.pesanTxt.lineHeight = 63;
	this.pesanTxt.lineWidth = 362;
	this.pesanTxt.parent = this;
	this.pesanTxt.setTransform(1.1,-43.3);

	this.judulTxt = new cjs.Text("Popup", "bold 34px 'Calibri'");
	this.judulTxt.name = "judulTxt";
	this.judulTxt.textAlign = "center";
	this.judulTxt.lineHeight = 44;
	this.judulTxt.lineWidth = 362;
	this.judulTxt.parent = this;
	this.judulTxt.setTransform(0.75,-101.1);

	this.okBtn = new lib.btntombolhijau();
	this.okBtn.name = "okBtn";
	this.okBtn.setTransform(1.55,88.15,1.097,1.1055,0,0,0,-0.1,0.2);
	new cjs.ButtonHelper(this.okBtn, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("A7hQ+QhuAAhPhOQhMhMgChrIAA5rQAAhvBOhOQBOhOBvAAMA3DAAAQBvAABOBOQBOBPAABuIAAZrQgCBrhMBMQhOBOhvAAgA3rvJIAagBIgtAAIATABg");
	this.shape.setTransform(-0.075,-14.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E55000").s().p("A8SS7Qh8AAhYhYQhYhYAAh8IAA8dQAAh8BYhYQBYhYB8AAMA4lAAAQB8AABYBYQBYBYAAB8IAAcdQAAB8hYBYQhYBYh8AAgA+xw+QhPBPAABwIAAaPQAABvBPBQQBQBPBvAAMA3iAAAQBwAABPhPQBPhQAAhvIAA6PQAAhwhPhPQhPhPhwAAMg3iAAAQhvAAhQBPg");
	this.shape_1.setTransform(0.025,-8.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A7wRWQhvAAhQhPQhPhQAAhvIAA6PQAAhwBPhPQBPhPBwAAMA3iAAAQBvAABPBPQBQBPAABwIAAaPQAABvhQBQQhPBPhvAAgA+ev1QhOBOAABvIAAZrQADBrBLBLQBPBOBuAAMA3DAAAQBvAABOhOQBMhMADhqIAA5rQgBhuhOhPQhOhOhvAAMg3DAAAQhuAAhPBOg");
	this.shape_2.setTransform(-0.1,-13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.okBtn},{t:this.judulTxt},{t:this.pesanTxt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.popupMC, new cjs.Rectangle(-211.1,-129.4,422.29999999999995,276.6), null);


(lib.kuisMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tombol_jawab
	this.jawabKuis4 = new lib.sensorTombol();
	this.jawabKuis4.name = "jawabKuis4";
	this.jawabKuis4.setTransform(19.15,99.3,2.1922,1.4275);
	new cjs.ButtonHelper(this.jawabKuis4, 0, 1, 2, false, new lib.sensorTombol(), 3);

	this.jawabKuis3 = new lib.sensorTombol();
	this.jawabKuis3.name = "jawabKuis3";
	this.jawabKuis3.setTransform(-388.7,99.3,2.1922,1.4275);
	new cjs.ButtonHelper(this.jawabKuis3, 0, 1, 2, false, new lib.sensorTombol(), 3);

	this.jawabKuis2 = new lib.sensorTombol();
	this.jawabKuis2.name = "jawabKuis2";
	this.jawabKuis2.setTransform(19.15,5.15,2.1922,1.4275);
	new cjs.ButtonHelper(this.jawabKuis2, 0, 1, 2, false, new lib.sensorTombol(), 3);

	this.jawabKuis1 = new lib.sensorTombol();
	this.jawabKuis1.name = "jawabKuis1";
	this.jawabKuis1.setTransform(-388.7,5.15,2.1922,1.4275);
	new cjs.ButtonHelper(this.jawabKuis1, 0, 1, 2, false, new lib.sensorTombol(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.jawabKuis1},{t:this.jawabKuis2},{t:this.jawabKuis3},{t:this.jawabKuis4}]}).wait(1));

	// aset
	this.no_soal_txt = new cjs.Text("no.", "40px 'Arial'");
	this.no_soal_txt.name = "no_soal_txt";
	this.no_soal_txt.textAlign = "right";
	this.no_soal_txt.lineHeight = 47;
	this.no_soal_txt.lineWidth = 74;
	this.no_soal_txt.parent = this;
	this.no_soal_txt.setTransform(-358.35,-103.4);

	this.hasilMC = new lib.hasilKuisMC();
	this.hasilMC.name = "hasilMC";
	this.hasilMC.setTransform(0,-217.65);

	this.soal_txt = new cjs.Text("Dynamic text soal", "40px 'Arial'");
	this.soal_txt.name = "soal_txt";
	this.soal_txt.lineHeight = 47;
	this.soal_txt.lineWidth = 785;
	this.soal_txt.parent = this;
	this.soal_txt.setTransform(-347.15,-103.2);

	this.jawaban_4 = new lib.jawabanMC();
	this.jawaban_4.name = "jawaban_4";
	this.jawaban_4.setTransform(202.85,135.55);

	this.jawaban_3 = new lib.jawabanMC();
	this.jawaban_3.name = "jawaban_3";
	this.jawaban_3.setTransform(-205,135.55);

	this.jawaban_2 = new lib.jawabanMC();
	this.jawaban_2.name = "jawaban_2";
	this.jawaban_2.setTransform(202.85,41.4);

	this.jawaban_1 = new lib.jawabanMC();
	this.jawaban_1.name = "jawaban_1";
	this.jawaban_1.setTransform(-205,41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.jawaban_1},{t:this.jawaban_2},{t:this.jawaban_3},{t:this.jawaban_4},{t:this.soal_txt},{t:this.hasilMC},{t:this.no_soal_txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kuisMC, new cjs.Rectangle(-434.1,-250.6,873.8,426.2), null);


// stage content:
(lib.kls2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,5,9];
	// timeline functions:
	this.frame_0 = function() {
		mpi = new MPI(this, lib);
	}
	this.frame_5 = function() {
		this.stop();
		mpi.click("mulaiBtn", 10);
	}
	this.frame_9 = function() {
		var soal = [["吃 chī", "makan", "minum", "membeli", "mengambil"],
					["喝 hē", "minum", "makan", "membeli", "mengantar"],
					["买 mǎi", "membeli", "makan", "minum", "pergi"],
					["牛奶 niú nǎi", "susu sapi", "roti", "bakpao", "nasi"],
					["面包 miàn bāo", "roti", "susu sapi", "bakpao", "mie"],
					["包子 bāo zi", "bakpao", "susu sapi", "roti", "kue tart"],
					["豆腐 dòu fu", "tahu", "ikan", "daging", "telur"],
					["鱼 yú", "ikan", "tahu", "daging", "telur"],
					["肉 ròu", "daging", "tahu", "ikan", "telur"],
					["蛋 dàn", "telur", "tahu", "ikan", "daging"],
					["Buah", "水果 shuǐ guǒ", "青菜 qīng cài", "豆腐 dòu fu", "面包 miàn bāo"],
					["Sayur hijau", "青菜 qīng cài", "水果 shuǐ guǒ", "豆腐 dòu fu", "面包 miàn bāo"],
					["Apel", "苹果 píng guǒ", "香蕉 xiāng jiāo", "葡萄 pú táo", "西瓜 xī guā"],
					["Pisang", "香蕉 xiāng jiāo", "苹果 píng guǒ", "葡萄 pú táo", "西瓜 xī guā"],
					["Anggur", "葡萄 pú táo", "苹果 píng guǒ", "香蕉 xiāng jiāo", "西瓜 xī guā"],
					["Semangka", "西瓜 xī guā", "苹果 píng guǒ", "香蕉 xiāng jiāo", "葡萄 pú táo"],
					["Nasi", "米饭 mǐ fàn", "面条 miàn tiáo", "蛋糕 dàn gāo", "巧克力 qiǎo kè lì"],
					["Mie", "面条 miàn tiáo", "米饭 mǐ fàn", "蛋糕 dàn gāo", "巧克力 qiǎo kè lì"],
					["Kue tart", "蛋糕 dàn gāo", "米饭 mǐ fàn", "面条 miàn tiáo", "巧克力 qiǎo kè lì"],
					["Cokelat", "巧克力 qiǎo kè lì", "米饭 mǐ fàn", "面条 miàn tiáo", "蛋糕 dàn gāo"],
					["香蕉 xiāng jiāo", "Pisang", "Apel", "Anggur", "Semangka"]];
		
		var ob = this;
		mpi.kuis("kuisMC", soal, 20, selesaiKuis);
		ob.kuisMC.opsi = "A";
		ob.kuisMC.suaraBenar = "dui";
		ob.kuisMC.suaraSalah = "cuo";
		ob.kuisMC.suaraWaktuHabis = "dao";
		ob.kuisMC.suaraSelesai = "wan";
		/* untuk suara kuis, pastikan suara memiliki linkage
		ob.kuisMC.suaraSoal = "";
		ob.kuisMC.suaraBenar = "";
		ob.kuisMC.suaraSalah = "";
		ob.kuisMC.suaraWaktuHabis = "";
		ob.kuisMC.suaraSelesai = "";
		*/
		mpi.timer("timerKuis", 90);
		mpi.startKuis();
		
		function selesaiKuis(){
			mpi.popup("popupMC", "成绩", ""+ob.kuisMC.score/2, kembali);
		}
		
		function kembali(){
			ob.gotoAndStop(5);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(4).call(this.frame_9).wait(4));

	// asset
	this.mulaiBtn = new lib.tombol_mulai();
	this.mulaiBtn.name = "mulaiBtn";
	this.mulaiBtn.setTransform(732.4,524,1.5,1.5);
	new cjs.ButtonHelper(this.mulaiBtn, 0, 1, 2);

	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(164.25,295.2,0.5,0.5);

	this.timerKuis = new lib.timerMC2();
	this.timerKuis.name = "timerKuis";
	this.timerKuis.setTransform(1308.6,99.55,1.6438,1.6438);

	this.kuisMC = new lib.kuisMC();
	this.kuisMC.name = "kuisMC";
	this.kuisMC.setTransform(721,358.8,1.6,1.5999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.mulaiBtn}]},5).to({state:[{t:this.kuisMC},{t:this.timerKuis}]},4).to({state:[]},1).wait(3));

	// BG
	this.instance_1 = new lib.birutoscahd();
	this.instance_1.setTransform(0,0,0.75,0.6686);

	this.instance_2 = new lib.IMG_20240813_085601removebg();
	this.instance_2.setTransform(116,24,0.2585,0.2695);

	this.instance_3 = new lib.SD();
	this.instance_3.setTransform(43,37,0.4979,0.4283);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.instance_3},{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1440,722.6);
// library properties:
lib.properties = {
	id: '31BCA53C770DAE4A85A7336FD3DEAC60',
	width: 1440,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_11.png?1738252442146", id:"CachedBmp_11"},
		{src:"images/IMG_20240813_085601removebg.png?1738252442146", id:"IMG_20240813_085601removebg"},
		{src:"images/kls2_atlas_1.png?1738252442050", id:"kls2_atlas_1"},
		{src:"sounds/wan.mp3?1738252442146", id:"wan"},
		{src:"sounds/dui.mp3?1738252442146", id:"dui"},
		{src:"sounds/cuo.mp3?1738252442146", id:"cuo"},
		{src:"sounds/dao.mp3?1738252442146", id:"dao"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['31BCA53C770DAE4A85A7336FD3DEAC60'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;