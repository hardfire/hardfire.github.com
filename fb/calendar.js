/* Facebook Puzzle
 * Avinash Kundaliya
 * avinash@avinash.com.np
 */
var input = [ {start: 30, end: 150}, {start: 540, end: 600}, {start: 560, end: 620}, {start: 610, end: 670} ];

var calendar = {};

//create collision groups on array of events passed
calendar.createGroups = function (events) {
	var groups = [], flag, i, j;

	for (i = 0; i < events.length; i++) {
		
		//test: check if event has start time , end time and endtime >= starttime
		if(events[i].start === undefined || events[i].end === undefined || events[i].start >= events[i].end)
		{
			throw "invalid event structure";
		}
		//events[i].id = i;

		//to check if event belonged to a collision group
		flag = 0; 

		for ( j = 0; j < groups.length; j++) {

			// if the event overlaps with a group
			if(events[i].start < groups[j].end && groups[j].start < events[i].end){

				//set flag
				flag = 1;

				//push and update start and end
				groups[j].start = Math.min(groups[j].start,events[i].start);
				groups[j].end = Math.max(groups[j].end,events[i].end);
				groups[j].events.push(events[i]);

			}
		}

		//if no overlap, create a new group
		if(flag === 0){
			groups.push({
				start:events[i].start,
				end:events[i].end,
				events:[events[i]]
			});
		}
	}
	return groups;
};


//divides the evensts into columns and draws them on the calendar
calendar.drawEvents = function (groups,id) {
	var maxWidth = 600, i, j, width, k, container, flag, cols = [], col = 0, lowest, height, top, left, appendHTML='';

	for (i = 0; i < groups.length; i++) {

		//max number of concurrent event at the time, for the group
		groups[i].collision = -1;
		cols = [];
		cols[0] = [];

		for (j = 0; j < groups[i].events.length; j++) {
			
			col = 0;
			flag = 0;

			//while event doesnt belong to a column
			while(flag === 0){

				lowest = false;	

				//get lowest value of current column
				for ( k = (cols.length - 1); k >= 0; k--) {
					if(cols[k][col] !== undefined){ 
						lowest = k;
						break;
					}
				}

				//if current column has an event
				if(lowest !== false)
				{
					//check if the new event coincides with the current column event
					//if not add it to the current column
					if(!(cols[lowest][col].start < groups[i].events[j].end && groups[i].events[j].start < cols[lowest][col].end))
					{
						if(cols[k+1] === undefined)
						{
							cols[k+1] = [];
						}

						groups[i].events[j].pos = col;

						cols[k+1][col] = groups[i].events[j];
						flag = true;
					}
					//if it coincides check on the new column
					col++;

				} else { 
					//if the column had no events, add current event
					cols[0].push(groups[i].events[j]);
					groups[i].events[j].pos = cols[0].length-1;
					flag = true;

					//increase max concurrent events count for the group
					groups[i].collision++;
				}
			}
		}
	}


	//draw on the screen
	//
	// empty the container
	container = document.getElementById(id);
	if(container.hasChildNodes()){
		while(container.childNodes.length >= 1){
			container.removeChild(container.firstChild);
		}
	}


	for ( i = 0; i < groups.length; i++) {
		
		//get width of each element in the event group
		width = maxWidth / (groups[i].collision + 1);

		//console.dir(groups[i]);

		for ( j = 0; j < groups[i].events.length; j++) {

			height = groups[i].events[j].end - groups[i].events[j].start;
			left = (width * groups[i].events[j].pos) + 10;
			top = groups[i].events[j].start;

			appendHTML +=' <div class="event-container" style="top:'+top+'px;left:'+left+'px;width:'+width+'px;">'+
							'<div class="event" style="height:'+height+'px;">'+
								'<div class="event-details">'+
									'<div class="event-name"> Sample Item </div>'+
									'<div class="event-location"> Sample Location </div>'+
								'</div>'+
							'</div>'+
						'</div>';

		}
	}
	container.innerHTML = appendHTML;
};

function layOutDay(events) {

	//test: events should be an array and have events
	if( ( (events instanceof Array) === false) || events.length <= 0)
	{
		throw "not enough events / events not an array";
	}

	//sort events in ascending order of start time
	events.sort(function(a,b){
		return a.start - b.start;
	});

	//divide the events in colliding groups
	var groups = calendar.createGroups(events);

	//draw the events in calendar
	calendar.drawEvents(groups,'events');
}

layOutDay(input);
