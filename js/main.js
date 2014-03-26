/**
 * @author William Heitzeg
 */
var hl7EndOfSegment="\n"
// b,f,n,r,t - control characters

var er7SourceTestMessage = "MSH|^~\&|NES|NINTENDO|TESTSYSTEM|TESTFACILITY|20010101000000||ADT^A04|Q123456789T123456789X123456|P|2.3"
	+ hl7EndOfSegment
	+ "EVN|A04|20010101000000|||^KOOPA^BOWSER"
	+ hl7EndOfSegment
	+ "PID|1||123456789|0123456789^AA^^JP|BROS^MARIO||19850101000000|M|||123 FAKE STREET^MARIO \T\ LUIGI BROS PLACE^TOADSTOOL KINGDOM^NES^A1B2C3^JP^HOME^^1234|1234|(555)555-0123^HOME^JP:1234567|||S|MSH|12345678|||||||0|||||N"
	+ hl7EndOfSegment
	+ "NK1|1|PEACH^PRINCESS|SO|ANOTHER CASTLE^^TOADSTOOL KINGDOM^NES^^JP|(123)555-1234|(123)555-2345|NOK"
	+ hl7EndOfSegment
	+ "NK1|2|TOADSTOOL^PRINCESS|SO|YET ANOTHER CASTLE^^TOADSTOOL KINGDOM^NES^^JP|(123)555-3456|(123)555-4567|EMC"
	+ hl7EndOfSegment
	+ "PV1|1|O|ABCD^EFGH||||123456^DINO^YOSHI^^^^^^MSRM^CURRENT^^^NEIGHBOURHOOD DR NBR|^DOG^DUCKHUNT^^^^^^^CURRENT||CRD|||||||123456^DINO^YOSHI^^^^^^MSRM^CURRENT^^^NEIGHBOURHOOD DR NBR|AO|0123456789|1|||||||||||||||||||MSH||A|||20010101000000"
	+ hl7EndOfSegment
	+ "IN1|1|PAR^PARENT||||LUIGI" + "IN1|2|FRI^FRIEND||||PRINCESS"
	+ hl7EndOfSegment;

function start()
{
	document.getElementById("er7ViewEditorContentTextArea").value = er7SourceTestMessage;

	var xmlString = convertEh7ToXML(er7SourceTestMessage);
	document.getElementById("xmlViewEditorContentTextArea").value = xmlString;

	//JSON
	var jsonString = convertEh7ToJSON(er7SourceTestMessage);
	document.getElementById("htmlViewEditorContentTextArea").value = jsonString;
	
	tests();
}

function tests() 
{
	
	
	//var hl7 = [{  MSH : "Dog", EVN : "Cat" }];
	//hl7.push( {PID : "A"} );
	//alert (alerts[0]["num"]);

	
	

	//setER7SourceMessage(er7SourceTestMessage);
	//var xmlSourceTestMessage = convertEh7ToXML_1(er7SourceTestMessage);
	//document.getElementById("er7ViewEditorContentTextArea").value = er7SourceTestMessage;
	//document.getElementById("xmlViewEditorContentTextArea").value = xmlSourceTestMessage;

	// alert(xmlSourceTestMessage["MSH"]);
}


