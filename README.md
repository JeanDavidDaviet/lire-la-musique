# Piano

## Done
- [x] Fix tempo issues
- [x] Use config file for global variables ? ( a way to share it)
- [x] Routing
- [x] ChangeLog
- [x] Clef change
- [x] Add Time signature
- [x] 4/4 3/4 2/4 6/8 change time signature
- [x] notes overlapping chords
- [x] Play note
- [x] Localization
- [x] [Add button to detect user interaction](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio)
- [x] Add all sounds from top to bottom
- [x] Add settings dialog
- [x] Add shortcuts
- [x] Add redux
- [x] Change Running Checkbox to Volume Checkbox
- [x] Add localstorage to keep configuration between reload
- [x] when using shortcut to change scale with keyboard arrows, need to update the controlScale input too.
- [x] When the number of alterations changes the start of the red line need to be moved futher right.

## Todo
- [ ] Add tests
- [ ] When using 3/4, need to show only 3 notes
- [ ] Sort the scales not on name only but on tone => Cb then C then C#
- [ ] As, Ds, and Gs need to have their signature. Signature can't be relevant to order in array because then order of flats is wrong.

## Features
- [ ] Add metronome sound
- [ ] Add differents notes (eighths, half, whole, ...)
- [ ] Make the tempo a range selector
- [ ] Choose between international notation (A, B, C, ...) and latin notation (La, Si, Do, ...)

## On update
- Bump version number (config, package.json)
- Changelog in differents translations (careful of date format)
- Cleanup
- Tests
- Dploy
