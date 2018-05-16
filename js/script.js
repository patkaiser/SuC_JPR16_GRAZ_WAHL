var parteien2012 = [15.31, 33.74, 13.75, 19.86, 12.14, 2.70, 0, 2.51]; //array

var parteien2017 = [10.05, 37.79, 15.86, 20.34, 10.51, 1.09, 3.94, 0.41 ]; //array

var parteien2012text = ['15,31', '33,74', '13,75', '19,86', '12,14', '2,70', 'n.k.', '2,51' ]; //array

var parteien2017text = ['10,05', '37,79', '15,86', '20,34', '10,51', '1,09', '3,94', '0,41' ]; //array

$('#GRW2017').hide();

$('#button2012').on('click', function () {

  $('#wahljahr').text("2012");

  $('#GRW2012').show();
  $('#GRW2017').hide();



  $('#ErgebnisSPÖ').text(parteien2012text[0]);
  $('#ErgebnisÖVP').text(parteien2012text[1]);
  $('#ErgebnisFPÖ').text(parteien2012text[2]);
  $('#ErgebnisKPÖ').text(parteien2012text[3]);
  $('#ErgebnisGRÜNE').text(parteien2012text[4]);
  $('#ErgebnisPIRAT').text(parteien2012text[5]);
  $('#ErgebnisNEOS').text(parteien2012text[6]);
  $('#ErgebnisSonst').text(parteien2012text[7]);


});


$('#button2017').on('click', function () {




  $('#wahljahr').text("2017");

  $('#spö2017').attr('width',parteien2017[0] *6);
  $('#övp2017').attr('width',parteien2017[1]*6);
  $('#fpö2017').attr('width',parteien2017[2]*6);
  $('#kpö2017').attr('width',parteien2017[3]*6);
  $('#grüne2017').attr('width',parteien2017[4]*6);
  $('#pirat2017').attr('width',parteien2017[5]*6);
  $('#neos2017').attr('width',parteien2017[6]*6);
  $('#sonst.2017').attr('width',parteien2017[7]*6);


  $('#ErgebnisSPÖ').text(parteien2017text[0]);
  $('#ErgebnisÖVP').text(parteien2017text[1]);
  $('#ErgebnisFPÖ').text(parteien2017text[2]);
  $('#ErgebnisKPÖ').text(parteien2017text[3]);
  $('#ErgebnisGRÜNE').text(parteien2017text[4]);
  $('#ErgebnisPIRAT').text(parteien2017text[5]);
  $('#ErgebnisNEOS').text(parteien2017text[6]);
  $('#ErgebnisSonst').text(parteien2017text[7]);


  $('#GRW2012').hide();
  $('#GRW2017').show();

});
