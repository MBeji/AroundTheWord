// Copied callback functions from the NextAuth configuration for isolated testing

// @ts-ignore (to allow for simplified mock types if full Session/Token types are complex)
const sessionCallback = async ({ session, token }) => {
  if (session?.user) {
    // The original code uses token.sub!, which implies sub is expected to be a string.
    // For testing, we'll ensure token.sub is provided.
    session.user.id = token.sub!;
  }
  return session;
};

// @ts-ignore (to allow for simplified mock types if full User/Token types are complex)
const jwtCallback = async ({ user, token }) => {
  if (user) {
    // The original code uses user.id. For testing, ensure user.id is provided.
    token.sub = user.id;
  }
  return token;
};

describe('NextAuth Callbacks', () => {
  describe('sessionCallback', () => {
    it('should populate session.user.id from token.sub', async () => {
      const mockSession = {
        user: { name: 'Test User', email: 'test@example.com' },
        expires: '1',
      };
      const mockToken = { sub: 'user-123-sub' };

      // @ts-ignore
      const result = await sessionCallback({ session: mockSession, token: mockToken });

      expect(result.user.id).toBe('user-123-sub');
    });

    it('should return session as is if session.user is not present', async () => {
      const mockSession = { expires: '1' }; // No user object
      const mockToken = { sub: 'user-123-sub' };

      // @ts-ignore
      const result = await sessionCallback({ session: mockSession, token: mockToken });

      // @ts-ignore
      expect(result.user).toBeUndefined();
    });

    it('should return session as is if session itself is null/undefined', async () => {
      const mockToken = { sub: 'user-123-sub' };
      // @ts-ignore
      const resultForNull = await sessionCallback({ session: null, token: mockToken });
      expect(resultForNull).toBeNull();

      // @ts-ignore
      const resultForUndefined = await sessionCallback({ session: undefined, token: mockToken });
      expect(resultForUndefined).toBeUndefined();
    });
  });

  describe('jwtCallback', () => {
    it('should populate token.sub from user.id if user exists', async () => {
      const mockUser = { id: 'user-456-id', name: 'Test User' };
      const mockToken = { name: 'Initial Token', email: 'initial@example.com' };

      // @ts-ignore
      const result = await jwtCallback({ user: mockUser, token: mockToken });

      expect(result.sub).toBe('user-456-id');
    });

    it('should return token as is if user is undefined', async () => {
      const mockToken = { name: 'Initial Token', email: 'initial@example.com', sub: 'existing-sub' };

      // @ts-ignore
      const result = await jwtCallback({ user: undefined, token: mockToken });

      expect(result.sub).toBe('existing-sub');
      expect(result.name).toBe('Initial Token'); // Ensure other token properties are preserved
    });

    it('should return token as is if user is undefined and token.sub is initially undefined', async () => {
      const mockToken = { name: 'Initial Token', email: 'initial@example.com' };

      // @ts-ignore
      const result = await jwtCallback({ user: undefined, token: mockToken });

      expect(result.sub).toBeUndefined();
      expect(result.name).toBe('Initial Token');
    });
  });
});
