function getMSHSegment(er7Message)
{
	var kitten="playful";
	var hl7Message = [kitten];

	return hl7Message;

}

function convertEh7ToJSON(er7Message)
{
	hl7Message = getMSHSegment(er7Message);
	
	if ( true )
		return hl7Message;
	/////////////////////////////////
	lengthOFMessage = er7SourceTestMessage.length;
	
	segmentSeparator = "CRLF";
	var fieldSeparator = "|";
	componentSeparator = "^";

	var buffer = "";
	var currentSegment = "";
	for ( var messagePosition = 0 ; messagePosition < lengthOFMessage; messagePosition++)
	{
		
		if ( currentSegment == "")
		{
			buffer +=er7Message[messagePosition];
			if ( buffer == "MSH")
			{
				currentSegment = "MSH";
				fieldSeparator = er7Message[messagePosition+1];
				componentSeparator = er7Message[messagePosition+1];
				messagePosition = findNextField(messagePosition, er7Message, fieldSeparator);
				hl7Message
			}
		}
		else 
		{
			//get element value
			var segmentID="MSH";
			var fieldID = ""
			var componentID = ""
			setComponent(value, componentID, fieldID, segmentID, hl7Message );

			messagePosition = findEndOfElement(messagePosition, er7Message, fieldSeparator);
		}
		
		
		// hl7Message
	}
	return hl7Message;
}

function findNextField(messagePosition, er7Message, fieldSeparator)
{
	var foundNextField=false;
	var newMessagePosition = messagePosition;
	while ( !foundNextField )
	{
		if ( er7Message[newMessagePosition] == fieldSeparator )
		{
			foundNextField = true;
			
		}
		
		newMessagePosition++;
	}
	
	return newMessagePosition;
}

// message
// segment
// field
// component

function setComponent(value, componentID, fieldID, segmentID, hl7Message )
{
	hl7Message.push(hl7Message, {segmentID : {fieldID : {componentID : value}}})
}

function addSegment(segmentID)
{
	hl7Message.push({dog:"Poodle"});
	hl7Message.push({dog:"Mutt"});
}

function getSegment(segmentID)
{
	
}


