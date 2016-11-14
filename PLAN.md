1. Implement App.render() - render Counter, ProgressBar and Config in main element.
2. Implement App.renderConfig() and App.renderProgressBar() based on App.state.isRunning.
3. Fix error: add App.state.isRunning flag, change flag to see changes in UI.
4. Add App.toggleTimer() - change isRunning only - and pass this to the Counter. 
Pass isRunning flag as well.
5. Add onClick in Counter button and implement changing class name on button based
on isRunning flag.
6. Test button.
7. Add App.state.workDuration and App.state.breakDuration to define how long should
take break and work.
8. Add App.changeWorkDuration() and App.changeBreakDuration(). Pass those and
recently added state properties to Config component.
9. Set title for both Options, value from work and break duration and onChange callback - changeWork/BreakDuration
10. In Option add max, title, value and onChange callbacks.
11. See how work and break duration changes.
12. Add App.state.time and App.state.isTickingForWork. Reset those flags in App.toggleTimer().
13. Add App.componentDidUpdate() and check if isRunning is true, if so - App.tickIfNeeded().
14. Check if you should tick for work or tick for break, if so - tick, if not - change
current period, because it means, that previous period is over.
15. Implement App.tick() - create App.timeout interval, change App.state.time in
callback function every 1000ms. 
16. Clear interval in App.toggleTimer().
17. Implement App.changeCurrentPeriod(). Reset time when changing!
18. Pass time prop to ProgressBar and Counter components.
19. In Counter display passed time using utils.formatTime().
20. In ProgressBar compute periodName based on props.isTickingForWork.
21. In ProgressBar compute styles, based on props.time and props.max.
22. Test app.

