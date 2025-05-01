import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoModal({ open, onClose, videoUrl }: VideoModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xl"
      fullWidth
      PaperProps={{
        sx: {
          width: '90vw',
          maxWidth: '1400px',
          bgcolor: 'transparent',
          boxShadow: 'none',
          position: 'relative',
          m: 0,
        }
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: -40,
          top: -40,
          color: 'white',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.7)',
          },
          zIndex: 1,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ p: 0, aspectRatio: "16/9", position: "relative", bgcolor: 'black' }}>
        <iframe
          width="100%"
          height="100%"
          src={`${videoUrl}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </DialogContent>
    </Dialog>
  );
} 