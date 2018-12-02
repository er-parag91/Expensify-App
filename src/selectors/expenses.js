import moment from 'moment';
//Get visible expenses at start

export default (expenses, {
    text,
    sortBy,
    startDate,
    endDate
}) => {

    return expenses.filter(expense => {
        const createdAtMoment = moment(expense.createdAt)
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment) : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment) : true;
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount > b.amount ? -1 : 1
        }
    })
}