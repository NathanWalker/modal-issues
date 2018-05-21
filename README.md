## Example of whitebar on top of modals 

```
tns run ios --emulator
```

Choose to open modal and observe the white bar at the top. This should be flush with color of the page background or controlled some other way. Prior to {N} 4.x, this could be controlled like this in the modal component constructor:

```
page.backgroundSpanUnderStatusBar = true;
page.backgroundColor = new Color('#AF1426');
```

However no longer works.