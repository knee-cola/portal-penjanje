import React from 'react';
import ImageUploader from 'react-images-upload';
import { withStyles } from '@material-ui/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { styles } from '@material-ui/core/Button';

export const styles2 = theme => ({
    container: {
        background: 'none',
        border: 'none',
    },
    /* Styles applied to the root element. */
    root: {
      lineHeight: 1.75, // To remove with v4.
      ...theme.typography.button,
      boxSizing: 'border-box',
      minWidth: 64,
      padding: '6px 16px',
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short,
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: fade(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
        '&$disabled': {
          backgroundColor: 'transparent',
        },
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
      },
    },
});

const StyledImageUploader = ({onDrop, classes}) =>  {

console.dir(classes);
console.dir(styles);

return <ImageUploader
    withIcon={true}
    withPreview={true}
    onDrop={onDrop}
    buttonText='Odabir slike'
    label=''
    imgExtension={['.jpg']}
    fileSizeError=' je prevelika slika'
    fileTypeError=' nije podržani tip slike'
    maxFileSize={5242880}
    className={classes.container}
    buttonClassName={classes.root}
/>;
}

// export default withTheme()(StyledImageUploader);
export default withStyles(styles2, { name: 'MuiButton' })(StyledImageUploader);