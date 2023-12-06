function main() {
  const functionName = 'fixValue';
  const trigger = new Trigger(functionName);
  const date = new Date();
  const time = '09:00';
  date.setHours(...time.split(':'));
  trigger.
    delete().
    createTimeBased(date);
}
