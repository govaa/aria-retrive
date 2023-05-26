// ** React Imports
import { useState } from "react";

// ** Next Imports
import Link from "next/link";
import { getServerSession } from "next-auth/next";
// ** MUI Components
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled, useTheme } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import MuiFormControlLabel from "@mui/material/FormControlLabel";
import Image from "next/image";
import Navbar from "@/components/_App/Navbar";

import IconifyIcon from "@/components/icon";
// ** Third Party Imports
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authOptions } from "../api/auth/[...nextauth]";
import { useAuth } from "@/lib/UserProvider";

import { toast } from "react-hot-toast";
import Head from "next/head";

const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: 400,
  },
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down("md")]: { mt: theme.spacing(8) },
}));

const LinkStyled = styled(Link)(({ theme }) => ({
  fontSize: "0.875rem",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    fontSize: "0.875rem",
    color: theme.palette.text.secondary,
  },
}));

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required(),
});

export async function getServerSideProps(context) {
  const proto =
    context.req.headers["x-forwarded-proto"] || context.req.connection.encrypted
      ? "https"
      : "http";
  try {
    const session = await getServerSession(
      context.req,
      context.res,
      authOptions
    );

    if (session) {
      return {
        redirect: {
          destination:
            proto + "://" + context.req.headers.host + "/cms-dashboard/",
          permanent: false,
        },
      };
    }
  } catch (error) {
    console.log(error.message);
  }
  return {
    props: {},
  };
}

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  // ** Hooks
  const auth = useAuth();
  const theme = useTheme();

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { email, password } = data;

    setLoading(true);
    auth
      .login({ email, password, rememberMe }, (e) => {
        if (e?.message?.includes("User")) {
          setError("email", {
            type: "manual",
            message: e?.message || "Email or Password is invalid",
          });
        } else
          setError("password", {
            type: "manual",
            message: e?.message || "Email or Password is invalid",
          });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Head>
        <title>Login to CMS</title>
        <meta name='description' content='Ariadne' />
      </Head>
      <Navbar />

      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3} sx={{ width: 350, justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "40px",
            }}
          >
            <Image
              alt='ariadne_logo'
              src='/images/newlogo-vertical.png'
              height={170}
              width={170}
            />
          </Box>
        </Grid>
        <Grid item xs={3} sx={{ width: 350 }}>
          <BoxWrapper>
            <form
              noValidate
              autoComplete='off'
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='email'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value = "", onChange, onBlur } }) => (
                    <TextField
                      autoFocus
                      label='Email'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.email)}
                      placeholder='Enter your email'
                    />
                  )}
                />
                {errors.email && (
                  <FormHelperText sx={{ color: "error.main" }}>
                    {errors.email.message}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth>
                <InputLabel
                  htmlFor='auth-login-v2-password'
                  error={Boolean(errors.password)}
                >
                  Password
                </InputLabel>
                <Controller
                  name='password'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value = "", onChange, onBlur } }) => (
                    <OutlinedInput
                      value={value}
                      onBlur={onBlur}
                      label='Password'
                      onChange={onChange}
                      id='auth-login-v2-password'
                      error={Boolean(errors.password)}
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <IconifyIcon
                              icon={
                                showPassword
                                  ? "mdi:eye-outline"
                                  : "mdi:eye-off-outline"
                              }
                              fontSize={20}
                            />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
                {errors.password && (
                  <FormHelperText sx={{ color: "error.main" }} id=''>
                    {errors.password.message}
                  </FormHelperText>
                )}
              </FormControl>
              <Box
                sx={{
                  mb: 4,
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  label='Remember me'
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                  }
                />
                {/* <LinkStyled href='/forgot-password'>Forgot Password?</LinkStyled> */}
              </Box>
              <Button
                disabled={loading}
                fullWidth
                size='large'
                type='submit'
                variant='contained'
                sx={{ mb: 7 }}
              >
                Login
              </Button>
            </form>
          </BoxWrapper>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;
