$(function() {


    var doorPictures = ['birds', 'bow', 'boy', 'branch', 'candycane', 
    'cherub', 'dove', 'elf_girl', 'elf_reindeer', 'girl', 'holly', 'holly_mistletoe',
    'house', 'joy', 'pointsettias', 'reindeer', 'reindeer_candle', 'santa',
    'santa_face', 'scene', 'sleigh', 'snowflake', 'tree', 'wreath'];

    var length = doorPictures.length;

    var doorIndex = [];

    for (var i = 0; i < length; i++) {
      doorIndex.push(i);
    }

    for (var r = 0; r < 80; r++) {

        var d1 = Math.floor((Math.random() * length));
        var d2 = Math.floor((Math.random() * length));

        var swap = doorIndex[d1];
        doorIndex[d1] = doorIndex[d2];
        doorIndex[d2] = swap;
    };


    for (var i = 0; i < length; i++) {
      var styleindex = (i % 3) + 1;
      var door = doorIndex[i];

      $('#calendar')[0].innerHTML += 
      '<div id="door' + door + '" class="door_container">' + 
          '<div id="opendoor' + door + '" class="image_container">' +
              '<img src="images/' + doorPictures[door] + '.jpg"/>' +
          '</div>' +
          '<div id="closeddoor' + door + '" class="closed_door style' + styleindex + '">' + 
          '<p >December ' + (door+1) + '</p>' +
          '</div>' +
          '</div>'
      ; 
        $('#calendar').delegate('#door' + door, 'click', function() {
          var id = $(this).attr("id");
          $('#closed' + id).toggle();
          $('#open' + id).toggle();
        });
    }
});