const todos = [];
const action = {
    type: 'create',
    id: null
}

$('.form__container, .enter__btn').on('submit', function(evt) {
    evt.preventDefault();

    const typeOfEvent = action.type;
    if (!typeOfEvent || typeOfEvent === 'create') { 
      create();
    } else {
      edit();
    }
});

// Main 
function create() {
	const inputValues = getInputValues();

    $('.result__heading').text(`${inputValues.name}ning bugungi rejalari:`) ;
  
    let todo = {
      name: inputValues.name,
      title: inputValues.todo,
      description: inputValues.description,
    };
  
    todos.push(todo);
    render();

    clearInputValue()
}

function edit() {
    const index = action.id;
	const inputValues = getInputValues();

    todos[index].title = inputValues.todo;
    todos[index].description = inputValues.description;

    action.type = 'create';
    action.id = null;

    clearInputValue()
    render()
}

// Secondary 
function render() {
	$('.result__container').html(null);
  
	todos.forEach((i, index) => {
	  const html = $(`
		<div class="result-box">
			<div class="result-title" onclick="accardionItem(event)"> <p  >${i.title}</p>
				<div class="result-icons">
					<i onclick="editEvent(event)" class="fal fa-pen edit-icon"></i> 
					<i onclick="deleteEvent(event)" class="far fa-trash-alt delete-icon"></i>
				</div>                
			</div>
			<div class="result-description"> <p>${i.description}</p> </div>
		</div>
	  `);
  
	  $('.result__container').append(html);
	});
}

function accardionItem(evt) {
	const element = $(evt.target);
	element.parent().find('.result-description').slideToggle(300);
} 

// Events
function deleteEvent(evt) {
	const element = $(evt.target);
	const boxID = getElementID(element);
	todos.splice(boxID, 1);
	action.type = 'create';
	action.id = null;
	render();
}

function editEvent(evt) {
	const element = $(evt.target);
	const boxID = getElementID(element);
	action.type = 'edit'
	action.id = boxID;

	const oldTitleVal = element.parent().parent().find('p').text();
	const oldDescriptionVal = element.parent().parent().parent().find('.result-description').text();

	$('.form__input').val(oldTitleVal);
	$('.form__input-three').val(oldDescriptionVal);
}

// Utils
function clearInputValue() {
  $('.form__input').val('');
  $('.form__input-three').val('');
}

function getInputValues() {
  return {
    name: $('.form__input-two').val(),
    todo: $('.form__input').val(),
    description: $('.form__input-three').val()
  }
}

function getElementID(el) {
    const resultBox = el.parent().parent().parent();
    return $(resultBox).index();
}