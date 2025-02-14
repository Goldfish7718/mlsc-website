'use client';

import { Button } from '@/components/ui/button';
import { Bell, LogIn, LogOut, Menu, Settings, User, UserPlus } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from './mode-toggle';

const Navbar = () => {
  return (
    <nav className="p-4 w-full flex justify-between items-center z-20 fixed top-0 border-b-[1px] border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#0c0a09]">
      <div className="flex gap-3 items-center">
        <h3 className="md:text-3xl hover:cursor-pointer font-bold text-2xl">MLSC</h3>
      </div>

      {/* MOBILE NAVIGATION - [RIGHT SHEET] */}
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="p-4">
          <SheetTitle>
            <span className="font-bold text-2xl">MLSC</span>
          </SheetTitle>
          <div className="my-6 flex flex-col justify-center gap-3">
            <ModeToggle />
            <SheetClose asChild>
              <Button variant="outline">
                Sign In <LogIn size={18} className="mx-2" />
              </Button>
            </SheetClose>

            <SheetClose asChild>
              <Button variant="outline">
                Sign up <User size={18} className="mx-2" />
              </Button>
            </SheetClose>
            <Button variant="outline">
              Add Contact
              <UserPlus size={18} className="mx-2" />
            </Button>
            <Button variant="outline">
              Notifications <Bell size={18} className="mx-2" />
            </Button>
            <SheetClose asChild></SheetClose>
            <Button variant="outline">
              Settings <Settings size={18} className="mx-2" />
            </Button>
            <SheetClose asChild>
              <Button variant="outline">
                Log Out
                <LogOut size={18} className="mx-2" />
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
